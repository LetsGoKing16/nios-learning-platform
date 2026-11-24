// Main Application Controller & State Store for NIOS Secondary Platform
import { SUBJECTS } from './data/courses.js';
import { LANGUAGES, TRANSLATIONS } from './data/languages.js';
import { VideoPlayer } from './videoPlayer.js';
import { QuizEngine } from './quiz.js';
import { FactFluencyArena } from './factFluency.js';
import { AnalyticsDashboard } from './analytics.js';
import { StudyToolsHub } from './studyTools.js';
import { StreakManager } from './streakManager.js';

// Safe LocalStorage wrapper preventing private-browsing / quota crashes
const safeStorage = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
    } catch (e) {
      console.warn('Storage set error:', e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  },
  getJSON(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  }
};

class AppState {
  constructor() {
    this.subjects = SUBJECTS;
    this.languages = LANGUAGES;
    this.translations = TRANSLATIONS;
    
    this.currentLanguage = safeStorage.get('nios_lang', 'en');
    this.theme = safeStorage.get('nios_theme', 'light');
    this.currentSubjectId = safeStorage.get('nios_curr_subj', 'math-211');
    const initSubj = this.subjects.find(s => s.id === this.currentSubjectId) || this.subjects[0];
    const savedLesson = safeStorage.get('nios_curr_lesson', null);
    this.currentLessonId = (savedLesson && initSubj.lessons.some(l => l.id === savedLesson)) 
      ? savedLesson 
      : (initSubj.lessons[0] ? initSubj.lessons[0].id : 'math-l1');
    this.activeTab = 'videos'; // 'videos', 'quiz', 'fact-fluency', 'analytics', 'study-tools'

    this.completedLessons = this.loadCompletedLessons();
    this.quizResults = this.loadQuizResults();
    this.factFluencyScores = this.loadFluencyScores();
    this.studyMinutes = this.loadStudyMinutes();

    this.streakManager = new StreakManager();
    this.startActiveTimer();
  }

  loadCompletedLessons() {
    return safeStorage.getJSON('nios_completed_lessons', ['math-l1']);
  }

  loadQuizResults() {
    return safeStorage.getJSON('nios_quiz_results', []);
  }

  loadFluencyScores() {
    return safeStorage.getJSON('nios_fluency_scores', []);
  }

  loadStudyMinutes() {
    const loaded = safeStorage.getJSON('nios_study_minutes', {});
    const initial = {
      'math-211': 45,
      'sci-212': 38,
      'soc-213': 24,
      'eng-202': 18,
      'eco-214': 15,
      'hin-201': 14,
      'deo-229': 16,
      'bus-215': 12,
      'hom-216': 10,
      'ich-223': 12,
      'psy-222': 14
    };
    return { ...initial, ...loaded };
  }

  saveStudyMinutes() {
    safeStorage.set('nios_study_minutes', this.studyMinutes);
  }

  startActiveTimer() {
    // Every 60 seconds of active app interaction, add 1 minute to current subject
    setInterval(() => {
      if (document.visibilityState === 'visible') {
        const subjId = this.currentSubjectId;
        this.studyMinutes[subjId] = (this.studyMinutes[subjId] || 0) + 1;
        this.saveStudyMinutes();
        this.streakManager.recordActivity(1, false);
      }
    }, 60000);
  }

  getCurrentSubject() {
    return this.subjects.find(s => s.id === this.currentSubjectId) || this.subjects[0];
  }

  getCurrentLesson() {
    const subj = this.getCurrentSubject();
    return subj.lessons.find(l => l.id === this.currentLessonId) || subj.lessons[0];
  }

  getTranslation() {
    return this.translations[this.currentLanguage] || this.translations['en'];
  }

  setSubject(subjectId) {
    this.currentSubjectId = subjectId;
    safeStorage.set('nios_curr_subj', subjectId);
    const subj = this.getCurrentSubject();
    if (subj && subj.lessons.length > 0) {
      this.currentLessonId = subj.lessons[0].id;
      safeStorage.set('nios_curr_lesson', this.currentLessonId);
    }
  }

  setLesson(lessonId) {
    this.currentLessonId = lessonId;
    safeStorage.set('nios_curr_lesson', lessonId);
  }

  setLanguage(langCode) {
    this.currentLanguage = langCode;
    safeStorage.set('nios_lang', langCode);
  }

  setTheme(theme) {
    this.theme = theme;
    safeStorage.set('nios_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setActiveTab(tabName) {
    this.activeTab = tabName;
  }

  toggleLessonCompleted(lessonId) {
    const idx = this.completedLessons.indexOf(lessonId);
    let completed = false;
    if (idx === -1) {
      this.completedLessons.push(lessonId);
      completed = true;
      this.streakManager.recordActivity(5, false);
    } else {
      this.completedLessons.splice(idx, 1);
      completed = false;
    }
    safeStorage.set('nios_completed_lessons', this.completedLessons);
    return completed;
  }

  isLessonCompleted(lessonId) {
    return this.completedLessons.includes(lessonId);
  }

  recordQuizResult(lessonId, result) {
    this.quizResults.push(result);
    safeStorage.set('nios_quiz_results', this.quizResults);
    this.streakManager.recordActivity(10, true);
  }

  recordFactFluencyScore(scoreData) {
    this.factFluencyScores.push(scoreData);
    safeStorage.set('nios_fluency_scores', this.factFluencyScores);
    this.streakManager.recordActivity(5, false);
  }

  getBestFluencyScore() {
    if (this.factFluencyScores.length === 0) return 0;
    return Math.max(...this.factFluencyScores.map(s => s.score || 0));
  }

  getAnalyticsStats() {
    let totalMinutes = 0;
    Object.values(this.studyMinutes).forEach(m => { totalMinutes += m; });

    let totalLessonsCount = 0;
    this.subjects.forEach(s => { totalLessonsCount += s.lessons.length; });

    const completedLessonsCount = this.completedLessons.length;
    const completionRate = totalLessonsCount > 0 ? Math.round((completedLessonsCount / totalLessonsCount) * 100) : 0;

    let totalQuizScorePct = 0;
    this.quizResults.forEach(q => { totalQuizScorePct += q.percentage; });
    const averageQuizScore = this.quizResults.length > 0 ? Math.round(totalQuizScorePct / this.quizResults.length) : 85;

    // Subject breakdown with percentages
    const subjectBreakdown = this.subjects.map(s => {
      const minutes = this.studyMinutes[s.id] || 0;
      const pct = totalMinutes > 0 ? Math.round((minutes / totalMinutes) * 100) : Math.round(100 / this.subjects.length);
      const completed = s.lessons.filter(l => this.completedLessons.includes(l.id)).length;
      return {
        id: s.id,
        name: s.name,
        color: s.color,
        icon: s.icon,
        minutes: minutes,
        percentage: pct,
        completed: completed,
        total: s.lessons.length,
        lessonProgress: s.lessons.length > 0 ? Math.round((completed / s.lessons.length) * 100) : 0
      };
    });

    const bestStreak = this.streakManager.getBestStreak();

    const recentActivities = [
      ...this.quizResults.map(q => ({
        icon: '📝',
        title: `Quiz: ${q.lessonTitle}`,
        desc: `Scored ${q.score}/${q.total} (${q.percentage}%)`,
        time: new Date(q.date).toLocaleDateString([], { month: 'short', day: 'numeric' })
      })),
      ...this.factFluencyScores.map(f => ({
        icon: '⚡',
        title: `Fact Fluency (${f.mode})`,
        desc: `Score: ${f.score} pts • Max Streak: 🔥${f.maxStreak}`,
        time: new Date(f.date).toLocaleDateString([], { month: 'short', day: 'numeric' })
      }))
    ].slice(-5).reverse();

    return {
      totalMinutes,
      totalLessonsCount,
      completedLessonsCount,
      completionRate,
      averageQuizScore,
      quizzesAttempted: this.quizResults.length,
      factsMasteredCount: Math.max(14, this.factFluencyScores.length * 6),
      bestStreak,
      subjectBreakdown,
      recentActivities
    };
  }

  resetAnalytics() {
    this.completedLessons = [];
    this.quizResults = [];
    this.factFluencyScores = [];
    this.studyMinutes = { 'math-211': 0, 'sci-212': 0, 'soc-213': 0, 'eng-202': 0, 'eco-214': 0 };
    safeStorage.remove('nios_completed_lessons');
    safeStorage.remove('nios_quiz_results');
    safeStorage.remove('nios_fluency_scores');
    safeStorage.remove('nios_study_minutes');
  }
}

class NIOSPlatformApp {
  constructor() {
    this.state = new AppState();
    this.videoPlayer = new VideoPlayer(this.state, () => this.updateHeaderUI());
    this.quizEngine = new QuizEngine(this.state, () => this.updateHeaderUI());
    this.factFluency = new FactFluencyArena(this.state, () => this.updateHeaderUI());
    this.analytics = new AnalyticsDashboard(this.state);
    this.studyTools = new StudyToolsHub(this.state);
  }

  init() {
    // Apply theme
    this.state.setTheme(this.state.theme);
    this.renderLayout();
    this.renderActiveTab();
    this.bindGlobalEvents();
  }

  renderLayout() {
    const t = this.state.getTranslation();
    const currLang = this.state.languages.find(l => l.code === this.state.currentLanguage) || this.state.languages[0];
    const currSubject = this.state.getCurrentSubject();
    const streak = this.state.streakManager.getStreak();

    document.getElementById('app-root').innerHTML = `
      <!-- Top Navigation Header -->
      <header class="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <!-- Logo & Platform Name -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-500/25">
              N
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-base sm:text-lg tracking-tight text-foreground">${t.appTitle}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Class 10</span>
              </div>
              <p class="text-[11px] text-muted-foreground hidden sm:block">${t.appSubtitle}</p>
            </div>
          </div>

          <!-- Center: Subject Quick Switcher & Search -->
          <div class="hidden md:flex items-center gap-3 flex-1 max-w-md mx-4">
            <!-- Subject Selector -->
            <select id="global-subject-select" class="text-xs font-semibold px-3 py-2 rounded-xl bg-muted/60 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
              ${this.state.subjects.map(s => `
                <option value="${s.id}" ${s.id === currSubject.id ? 'selected' : ''}>
                  ${s.icon} ${s.name} (${s.code})
                </option>
              `).join('')}
            </select>

            <!-- Global Search -->
            <div class="relative flex-1">
              <input 
                type="text" 
                id="global-search-input" 
                placeholder="${t.searchPlaceholder}" 
                class="w-full text-xs px-3.5 py-2 pl-8 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
              />
              <span class="absolute left-2.5 top-2.5 text-xs text-muted-foreground">🔍</span>
            </div>
          </div>

          <!-- Right: Streak, Language, Theme -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Streak Badge -->
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold cursor-pointer hover:bg-amber-500/15 transition" id="header-streak-badge" title="Daily Learning Streak">
              <span>🔥</span>
              <span>${streak}</span>
            </div>

            <!-- Language Modal Trigger Button (Supports 50+ languages) -->
            <button id="open-lang-modal-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs font-semibold text-foreground transition">
              <span>${currLang.flag}</span>
              <span class="hidden sm:inline">${currLang.name}</span>
              <span class="text-[10px] text-muted-foreground">▼</span>
            </button>

            <!-- Dark / Light Mode Switcher -->
            <button id="theme-toggle-btn" class="p-2 rounded-xl bg-muted/60 hover:bg-muted border border-border text-foreground text-sm transition" title="Toggle Theme">
              ${this.state.theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <!-- Global Tab Navigation Bar -->
        <nav class="border-t border-border/60 bg-muted/20 px-4 sm:px-6">
          <div class="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-2">
            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'catalog' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="catalog">
              <span>📚</span>
              <span>${t.tabCoursesCatalog || 'All Courses'}</span>
            </button>

            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'videos' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="videos">
              <span>🎥</span>
              <span>${t.tabVideos}</span>
            </button>

            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'quiz' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="quiz">
              <span>📝</span>
              <span>${t.tabQuiz}</span>
            </button>

            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'fact-fluency' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="fact-fluency">
              <span>⚡</span>
              <span>${t.tabFactFluency}</span>
            </button>

            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'analytics' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="analytics">
              <span>📊</span>
              <span>${t.tabAnalytics}</span>
            </button>

            <button class="main-tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${this.state.activeTab === 'study-tools' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}" data-tab="study-tools">
              <span>🛠️</span>
              <span>${t.tabStudyTools}</span>
            </button>
          </div>
        </nav>
      </header>

      <!-- Main Content Container with Subject & Lesson Sidebar -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <!-- Daily Streak Bar Banner -->
        <div id="streak-bar-container" class="mb-6"></div>

        <div class="grid grid-cols-1 ${this.state.activeTab === 'catalog' ? 'grid-cols-1' : 'lg:grid-cols-4'} gap-6">
          <!-- Left Sidebar: Subjects & Lessons Selector -->
          ${this.state.activeTab !== 'catalog' ? `
            <aside id="lessons-sidebar-container" class="lg:col-span-1 space-y-4">
              ${this.renderSidebar(currSubject, t)}
            </aside>
          ` : ''}

          <!-- Right Content Root for Active Tab -->
          <section id="active-tab-container" class="${this.state.activeTab === 'catalog' ? 'col-span-1' : 'lg:col-span-3'}">
            <!-- Dynamic content injected here -->
          </section>
        </div>
      </main>

      <!-- Language Selection Modal (Searchable 50+ languages) -->
      <div id="language-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 hidden">
        <div class="w-full max-w-lg rounded-3xl bg-card border border-border shadow-2xl p-6 space-y-4 animate-scaleUp">
          <div class="flex items-center justify-between">
            <h3 class="font-extrabold text-lg text-foreground">${t.languageModalTitle}</h3>
            <button id="close-lang-modal-btn" class="p-1.5 rounded-lg text-muted-foreground hover:bg-muted">✕</button>
          </div>

          <div class="relative">
            <input 
              type="text" 
              id="language-search-input" 
              placeholder="${t.languageModalSearch}" 
              class="w-full text-xs px-3.5 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>

          <div id="language-options-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto p-1 scrollbar-thin">
            ${this.renderLanguageOptions(this.state.languages)}
          </div>

          <div class="text-[11px] text-muted-foreground text-center pt-2 border-t border-border">
            Instant interface translation supporting major Indian and global languages.
          </div>
        </div>
      </div>
    `;

    // Render Streak Widget
    const streakContainer = document.getElementById('streak-bar-container');
    if (streakContainer) {
      this.state.streakManager.renderStreakWidget(streakContainer);
    }
  }

  renderSidebar(currSubject, t) {
    const currLesson = this.state.getCurrentLesson();

    return `
      <div class="p-4 rounded-2xl bg-card border border-border shadow-sm space-y-4">
        <!-- Quick Link to All Courses -->
        <button id="sidebar-browse-catalog-btn" class="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 border border-blue-500/20 text-xs font-bold text-primary transition shadow-xs">
          <div class="flex items-center gap-2">
            <span>📚</span>
            <span>All 11 Courses (98 Lessons)</span>
          </div>
          <span class="text-xs">→</span>
        </button>

        <div class="h-px bg-border"></div>

        <!-- Subject Header Dropdown -->
        <div class="space-y-1.5">
          <label class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            ${t.selectSubject}
          </label>
          <div class="space-y-1">
            ${this.state.subjects.map(s => `
              <button class="subject-select-item w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-bold transition ${s.id === currSubject.id ? 'bg-primary/10 text-primary border border-primary/30' : 'hover:bg-muted text-foreground/80'}" data-subject-id="${s.id}">
                <div class="flex items-center gap-2">
                  <span class="text-base">${s.icon}</span>
                  <span>${s.name}</span>
                </div>
                <span class="text-[10px] font-mono text-muted-foreground font-normal">Code ${s.code}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="h-px bg-border"></div>

        <!-- Lessons List for Selected Subject -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-foreground">
            <span>${t.lessons} (${currSubject.lessons.length})</span>
            <span class="text-[10px] font-semibold text-emerald-600">Restored Streams Active</span>
          </div>

          <div class="space-y-1.5 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
            ${currSubject.lessons.map(l => {
              const isActive = l.id === currLesson.id;
              const isCompleted = this.state.isLessonCompleted(l.id);
              const isRestored = l.isRestored;

              return `
                <button class="lesson-select-item w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start justify-between gap-2.5 ${
                  isActive 
                    ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs' 
                    : 'border-border/60 hover:bg-muted/50 hover:border-border text-foreground'
                }" data-lesson-id="${l.id}">
                  <div class="space-y-1 flex-1">
                    <div class="flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded-md bg-muted flex items-center justify-center font-mono font-bold text-[10px]">${l.number}</span>
                      <span class="truncate max-w-[150px] font-semibold">${l.title}</span>
                    </div>
                    ${isRestored ? `
                      <span class="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 font-bold">
                        ⚡ Restored Active Video
                      </span>
                    ` : ''}
                  </div>
                  <div class="flex flex-col items-end gap-1">
                    <span class="text-[10px] text-muted-foreground">${l.duration}</span>
                    ${isCompleted ? `<span class="text-emerald-500 font-bold text-xs">✓</span>` : ''}
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderLanguageOptions(languages) {
    return languages.map(lang => `
      <button class="lang-option-btn p-2.5 rounded-xl border border-border/80 hover:border-primary hover:bg-primary/5 text-left text-xs transition flex items-center gap-2.5 text-foreground ${lang.code === this.state.currentLanguage ? 'bg-primary/10 border-primary font-bold text-primary' : ''}" data-code="${lang.code}">
        <span class="text-base">${lang.flag}</span>
        <div class="truncate">
          <div class="font-semibold">${lang.native}</div>
          <div class="text-[10px] text-muted-foreground">${lang.name}</div>
        </div>
      </button>
    `).join('');
  }

  renderActiveTab() {
    const container = document.getElementById('active-tab-container');
    if (!container) return;

    if (this.state.activeTab === 'catalog') {
      this.renderCoursesCatalog(container);
    } else if (this.state.activeTab === 'videos') {
      this.videoPlayer.render(container);
    } else if (this.state.activeTab === 'quiz') {
      this.quizEngine.reset();
      this.quizEngine.render(container);
    } else if (this.state.activeTab === 'fact-fluency') {
      container.innerHTML = `<div id="fact-fluency-root"></div>`;
      const fluencyRoot = document.getElementById('fact-fluency-root');
      this.factFluency.render(fluencyRoot);
    } else if (this.state.activeTab === 'analytics') {
      this.analytics.render(container);
    } else if (this.state.activeTab === 'study-tools') {
      this.studyTools.render(container);
    }
  }

  renderCoursesCatalog(container) {
    const t = this.state.getTranslation();
    const currSubj = this.state.getCurrentSubject();

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Catalog Header Banner -->
        <div class="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div class="space-y-1.5 max-w-xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <span>🏛️</span>
              <span>NIOS Secondary (Class 10) Official Curriculum</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Complete Course & Subject Catalog</h2>
            <p class="text-xs sm:text-sm text-blue-100">
              All 11 NIOS secondary subjects with all 98 chapter lectures, verified video streams connected to @NIOSSecondaryCourses, chapter notes, and quizzes.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://www.youtube.com/@NIOSSecondaryCourses" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition shadow-md flex items-center gap-2">
              <span>▶ Official YouTube Channel (64.6K)</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${this.state.subjects.map(s => {
            const completedCount = s.lessons.filter(l => this.state.isLessonCompleted(l.id)).length;
            const progressPct = s.lessons.length > 0 ? Math.round((completedCount / s.lessons.length) * 100) : 0;
            const isSelected = s.id === currSubj.id;

            return `
              <div class="course-catalog-card p-5 rounded-2xl bg-card border ${isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border'} hover:border-primary/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between gap-4 group">
                <div class="space-y-3">
                  <!-- Header: Icon, Code Badge, Lesson Count -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-xs" style="background-color: ${s.color}15; color: ${s.color};">
                        ${s.icon}
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <h3 class="font-extrabold text-lg text-foreground group-hover:text-primary transition">${s.name}</h3>
                          <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-bold">Code ${s.code}</span>
                        </div>
                        <div class="text-xs text-muted-foreground font-medium">${s.hindiName || ''}</div>
                      </div>
                    </div>
                    <span class="text-xs font-bold px-3 py-1 rounded-full text-white shadow-xs" style="background-color: ${s.color};">
                      ${s.lessons.length} lessons
                    </span>
                  </div>

                  <p class="text-xs text-muted-foreground leading-relaxed">
                    ${s.description}
                  </p>

                  <!-- Progress Bar -->
                  <div class="space-y-1 pt-1">
                    <div class="flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                      <span>Progress</span>
                      <span>${completedCount}/${s.lessons.length} lessons (${progressPct}%)</span>
                    </div>
                    <div class="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                      <div class="h-full rounded-full transition-all duration-500" style="width: ${progressPct}%; background-color: ${s.color};"></div>
                    </div>
                  </div>

                  <!-- Topics Preview Pills -->
                  <div class="space-y-1.5 pt-2 border-t border-border/60">
                    <div class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Curriculum Topics (${s.lessons.length}):</div>
                    <div class="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1 scrollbar-thin">
                      ${s.lessons.map(l => `
                        <button class="catalog-lesson-pill text-[11px] px-2 py-1 rounded-lg bg-muted/60 hover:bg-primary/10 hover:text-primary transition text-foreground/80 font-medium border border-transparent hover:border-primary/30" data-subject-id="${s.id}" data-lesson-id="${l.id}">
                          ${l.number}. ${l.title}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                </div>

                <!-- Footer Action Buttons -->
                <div class="pt-2 flex items-center justify-between gap-3 border-t border-border">
                  <button class="open-course-btn flex-1 py-2.5 rounded-xl text-xs font-bold text-white transition shadow-sm flex items-center justify-center gap-1.5 hover:opacity-95" style="background-color: ${s.color};" data-subject-id="${s.id}">
                    <span>▶ Start Learning (${s.lessons.length} Topics)</span>
                  </button>
                  <a href="${s.playlistUrl || 'https://www.youtube.com/@NIOSSecondaryCourses'}" target="_blank" rel="noopener noreferrer" class="px-3 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs transition" title="Open Official Playlist on YouTube">
                    📺
                  </a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Event binding for course cards and lesson pills
    container.querySelectorAll('.open-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setSubject(btn.dataset.subjectId);
        this.state.setActiveTab('videos');
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });

    container.querySelectorAll('.catalog-lesson-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setSubject(btn.dataset.subjectId);
        this.state.setLesson(btn.dataset.lessonId);
        this.state.setActiveTab('videos');
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });
  }

  updateHeaderUI() {
    const streakContainer = document.getElementById('streak-bar-container');
    if (streakContainer) {
      this.state.streakManager.renderStreakWidget(streakContainer);
    }
    const sidebarContainer = document.getElementById('lessons-sidebar-container');
    if (sidebarContainer) {
      sidebarContainer.innerHTML = this.renderSidebar(this.state.getCurrentSubject(), this.state.getTranslation());
      this.bindSidebarEvents();
    }
  }

  bindGlobalEvents() {
    // Tab switching
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setActiveTab(btn.dataset.tab);
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });

    // Theme toggle
    document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
      const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
      this.state.setTheme(nextTheme);
      this.renderLayout();
      this.renderActiveTab();
      this.bindGlobalEvents();
    });

    // Subject dropdown in header
    document.getElementById('global-subject-select')?.addEventListener('change', (e) => {
      this.state.setSubject(e.target.value);
      this.renderLayout();
      this.renderActiveTab();
      this.bindGlobalEvents();
    });

    // Global Search
    const searchInput = document.getElementById('global-search-input');
    searchInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) return;

      for (const subj of this.state.subjects) {
        for (const l of subj.lessons) {
          if (l.title.toLowerCase().includes(query) || l.overview.toLowerCase().includes(query)) {
            this.state.setSubject(subj.id);
            this.state.setLesson(l.id);
            this.renderLayout();
            this.renderActiveTab();
            this.bindGlobalEvents();
            return;
          }
        }
      }
    });

    // Language Modal
    const modal = document.getElementById('language-modal');
    const openBtn = document.getElementById('open-lang-modal-btn');
    const closeBtn = document.getElementById('close-lang-modal-btn');
    const searchLangInput = document.getElementById('language-search-input');

    openBtn?.addEventListener('click', () => {
      modal?.classList.remove('hidden');
      searchLangInput?.focus();
    });

    closeBtn?.addEventListener('click', () => {
      modal?.classList.add('hidden');
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });

    searchLangInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = this.state.languages.filter(l => 
        l.name.toLowerCase().includes(q) || l.native.toLowerCase().includes(q) || l.code.toLowerCase().includes(q)
      );
      const grid = document.getElementById('language-options-grid');
      if (grid) {
        grid.innerHTML = this.renderLanguageOptions(filtered);
        this.bindLanguageOptionClicks();
      }
    });

    this.bindLanguageOptionClicks();
    this.bindSidebarEvents();
  }

  bindLanguageOptionClicks() {
    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setLanguage(btn.dataset.code);
        document.getElementById('language-modal')?.classList.add('hidden');
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });
  }

  bindSidebarEvents() {
    // Browse all courses button in sidebar
    document.getElementById('sidebar-browse-catalog-btn')?.addEventListener('click', () => {
      this.state.setActiveTab('catalog');
      this.renderLayout();
      this.renderActiveTab();
      this.bindGlobalEvents();
    });

    // Subject item clicks
    document.querySelectorAll('.subject-select-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setSubject(btn.dataset.subjectId);
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });

    // Lesson item clicks
    document.querySelectorAll('.lesson-select-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.setLesson(btn.dataset.lessonId);
        this.renderLayout();
        this.renderActiveTab();
        this.bindGlobalEvents();
      });
    });
  }
}

// Bootstrap application safely with error boundary
function bootstrapApp() {
  try {
    const app = new NIOSPlatformApp();
    app.init();
    console.log('[NIOS Platform] Application successfully started');
  } catch (err) {
    console.error('[NIOS Platform] Startup error:', err);
    const root = document.getElementById('app-root');
    if (root) {
      root.innerHTML = `
        <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#090d16;color:#f8fafc;font-family:sans-serif;padding:24px;text-align:center;">
          <div style="max-width:440px;background:#0f172a;border:1px solid #1e293b;border-radius:20px;padding:32px;box-shadow:0 20px 40px rgba(0,0,0,0.5);">
            <div style="font-size:36px;margin-bottom:12px;">⚠️</div>
            <h2 style="font-size:18px;font-weight:bold;margin-bottom:8px;color:#f87171;">Application Initialization Notice</h2>
            <p style="font-size:13px;color:#94a3b8;line-height:1.5;margin-bottom:20px;">
              ${err.message || 'An error occurred while loading courses.'}
            </p>
            <button onclick="try{localStorage.clear();}catch(e){}location.reload();" style="padding:10px 20px;background:#2563eb;color:white;border:none;border-radius:10px;font-weight:bold;font-size:13px;cursor:pointer;">
              Reset Cache & Reload
            </button>
          </div>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}

