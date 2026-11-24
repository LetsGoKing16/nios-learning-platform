// Enhanced Video Player Controller for NIOS Secondary Platform
// Resolves video unavailability for Lessons 2, 3, 4 with multi-tier streaming fallbacks
// Directly connected to Official @NIOSSecondaryCourses YouTube Channel

import { NIOS_CHANNEL_URL } from './data/courses.js';

export class VideoPlayer {
  constructor(appState, onProgressUpdate) {
    this.appState = appState;
    this.onProgressUpdate = onProgressUpdate;
    this.currentStreamMode = 'primary'; // 'primary', 'channel', 'backup', 'interactive'
    this.currentSlideIndex = 0;
    this.notesKeyPrefix = 'nios_notes_';
  }

  buildSafeUrl(rawUrl) {
    if (!rawUrl) return '';
    let url = rawUrl.trim();
    if (!url.startsWith('http')) {
      url = `https://www.youtube.com/embed/${url}`;
    }
    try {
      const u = new URL(url);
      u.searchParams.set('rel', '0');
      u.searchParams.set('playsinline', '1');
      u.searchParams.set('modestbranding', '1');
      u.searchParams.delete('enablejsapi');
      return u.toString();
    } catch {
      return url;
    }
  }

  render(container) {
    const lesson = this.appState.getCurrentLesson();
    if (!lesson) {
      container.innerHTML = `<div class="p-8 text-center text-gray-500">No lesson selected.</div>`;
      return;
    }

    const currSubject = this.appState.getCurrentSubject();
    const t = this.appState.getTranslation();
    const isRestored = lesson.isRestored;
    const vidId = (lesson.primaryVideoUrl || '').replace(/.*\/embed\//, '').split('?')[0];
    const directUrl = lesson.directYoutubeUrl || (vidId ? `https://www.youtube.com/watch?v=${vidId}` : `https://www.youtube.com/results?search_query=NIOS+Secondary+Courses+${encodeURIComponent(lesson.title)}`);

    container.innerHTML = `
      <div class="video-classroom-container space-y-6">
        <!-- Top Video Status & Source Switcher Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
              ${lesson.number}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${isRestored ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30' : 'bg-primary/10 text-primary'}">
                  ${isRestored ? '⚡ Verified Active Lecture' : lesson.videoStatusNote || 'Active Lecture'}
                </span>
                <span class="text-xs text-muted-foreground">⏱️ ${lesson.duration}</span>
              </div>
              <h2 class="text-xl font-bold tracking-tight text-foreground mt-0.5">${lesson.title}</h2>
            </div>
          </div>

          <!-- Multi-tier Stream Selector -->
          <div class="flex flex-wrap items-center gap-1.5 bg-muted/60 p-1 rounded-xl border border-border text-xs font-semibold">
            <button id="stream-primary-btn" class="stream-btn px-3 py-1.5 rounded-lg transition-all ${this.currentStreamMode === 'primary' ? 'bg-primary text-white shadow-sm' : 'hover:bg-muted text-muted-foreground'}">
              🎥 Stream 1: Topic HD
            </button>
            <button id="stream-backup-btn" class="stream-btn px-3 py-1.5 rounded-lg transition-all ${this.currentStreamMode === 'backup' ? 'bg-primary text-white shadow-sm' : 'hover:bg-muted text-muted-foreground'}">
              🔄 Stream 2: Alternate Mirror
            </button>
            <button id="stream-channel-btn" class="stream-btn px-3 py-1.5 rounded-lg transition-all ${this.currentStreamMode === 'channel' ? 'bg-primary text-white shadow-sm' : 'hover:bg-muted text-muted-foreground'}">
              📺 Stream 3: Subject Series
            </button>
            <button id="stream-interactive-btn" class="stream-btn px-3 py-1.5 rounded-lg transition-all ${this.currentStreamMode === 'interactive' ? 'bg-primary text-white shadow-sm' : 'hover:bg-muted text-muted-foreground'}">
              📑 Stream 4: Slides
            </button>
          </div>
        </div>

        <!-- Channel Direct Connection Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-red-600/10 via-red-500/5 to-transparent border border-red-500/20 text-xs">
          <div class="flex items-center gap-2 text-foreground font-medium">
            <span class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">▶</span>
            <span>Connected to <strong>@NIOSSecondaryCourses</strong> Official Channel</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm">
              <span>▶ Watch on YouTube</span>
              <span>↗</span>
            </a>
            <a href="${NIOS_CHANNEL_URL}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold transition">
              Browse Channel Hub
            </a>
          </div>
        </div>

        <!-- Video Player Frame or Interactive Slide Deck -->
        <div class="player-wrapper relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border border-border/50">
          ${this.renderPlayerContent(lesson, currSubject)}
        </div>

        <!-- Playback Problem Quick Help Banner -->
        <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-card border border-border shadow-xs text-xs">
          <div class="flex items-center gap-2 text-foreground font-medium">
            <span class="text-amber-500 text-sm">⚡</span>
            <span><strong>Video not playing?</strong> If restricted on your network, switch streams or watch directly:</span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button id="quick-fix-backup-btn" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-bold transition">
              🔄 Alternate Mirror
            </button>
            <button id="quick-fix-channel-btn" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition">
              📺 Subject Series
            </button>
            <button id="quick-fix-slides-btn" class="px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold transition">
              📑 Synced Slides
            </button>
            <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition flex items-center gap-1 shadow-xs">
              <span>▶ YouTube App ↗</span>
            </a>
          </div>
        </div>

        <!-- Video Quick Navigation & Actions Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border">
          <div class="flex items-center gap-2">
            <button id="mark-lesson-complete-btn" class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${this.appState.isLessonCompleted(lesson.id) ? 'bg-emerald-500 text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}">
              <span>${this.appState.isLessonCompleted(lesson.id) ? '✓ Completed' : 'Mark as Watched'}</span>
            </button>
            <button id="jump-to-quiz-btn" class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 transition-all">
              <span>📝 ${t.takeQuizBtn} (${lesson.quizzes?.length || 0} Questions)</span>
            </button>
          </div>
          <div class="text-xs text-muted-foreground flex items-center gap-2">
            <span>💡 Tip: Take the lesson quiz after watching to earn mastery badges!</span>
          </div>
        </div>

        <!-- Two Columns: Chapter Timestamps & Notes / Key Concepts -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Timestamps & Chapters -->
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h3 class="font-bold text-base flex items-center gap-2 text-foreground">
              <span>⏱️</span> ${t.timestamps}
            </h3>
            <div class="space-y-2">
              ${(lesson.timestamps || []).map((ts, idx) => `
                <div class="timestamp-item flex items-center justify-between p-2.5 rounded-lg bg-muted/40 hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border" data-time="${ts.time}">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">${ts.time}</span>
                    <span class="text-sm font-medium text-foreground">${ts.title}</span>
                  </div>
                  <span class="text-xs text-muted-foreground">▶</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Key Concepts & Learning Notes -->
          <div class="lg:col-span-2 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-base flex items-center gap-2 text-foreground">
                <span>📚</span> ${t.keyConcepts}
              </h3>
              <span class="text-xs text-muted-foreground font-semibold">NIOS Syllabus Aligned</span>
            </div>
            
            <p class="text-sm text-muted-foreground leading-relaxed">
              ${lesson.overview}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              ${(lesson.keyConcepts || []).map(concept => `
                <div class="p-3 rounded-xl bg-muted/30 border border-border/60 text-xs text-foreground/90 flex gap-2">
                  <span class="text-primary font-bold">•</span>
                  <span>${concept}</span>
                </div>
              `).join('')}
            </div>

            <!-- Student Scratch Notes -->
            <div class="pt-3 border-t border-border">
              <label class="block text-xs font-semibold text-muted-foreground mb-1">
                ✍️ My Lesson Notes (Auto-saved)
              </label>
              <textarea id="lesson-student-notes" rows="3" class="w-full text-xs p-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground" placeholder="Jot down formulas, homework questions, or key points from this video...">${this.loadNotes(lesson.id)}</textarea>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(container, lesson);
  }

  renderPlayerContent(lesson, currSubject) {
    if (this.currentStreamMode === 'interactive') {
      return this.renderInteractiveSlides(lesson);
    }

    let videoUrl = lesson.primaryVideoUrl;

    if (this.currentStreamMode === 'backup') {
      videoUrl = lesson.backupVideoUrl || lesson.primaryVideoUrl;
    } else if (this.currentStreamMode === 'channel') {
      videoUrl = currSubject?.playlistUrl || lesson.backupVideoUrl || lesson.primaryVideoUrl;
    }

    const safeUrl = this.buildSafeUrl(videoUrl);
    const vidId = (videoUrl || '').replace(/.*\/embed\//, '').split('?')[0];
    const directUrl = lesson.directYoutubeUrl || (vidId ? `https://www.youtube.com/watch?v=${vidId}` : `https://www.youtube.com/results?search_query=NIOS+Secondary+Courses+${encodeURIComponent(lesson.title)}`);

    return `
      <div class="relative w-full h-full group bg-slate-950 flex items-center justify-center overflow-hidden">
        <!-- Background Fallback Container (Visible if iframe is blocked or restricted) -->
        <div class="absolute inset-0 z-0 flex flex-col items-center justify-center p-6 text-center text-slate-300 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
          <div class="w-14 h-14 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-2xl font-black mb-3">
            ▶
          </div>
          <h3 class="font-bold text-white text-base mb-1">${lesson.title}</h3>
          <p class="text-xs text-slate-400 max-w-sm mb-4">Click below to watch this lecture directly on YouTube or use the player.</p>
          <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition flex items-center gap-2">
            <span>▶ Watch on YouTube</span>
            <span>↗</span>
          </a>
        </div>

        <!-- Active Video Iframe -->
        <iframe 
          id="nios-active-video-iframe"
          src="${safeUrl}" 
          title="${lesson.title}"
          class="w-full h-full border-0 relative z-10" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
          referrerpolicy="strict-origin-when-cross-origin"
          loading="eager"
          allowfullscreen>
        </iframe>
        
        <!-- Floating YouTube Quick Action Overlay in Top Right -->
        <div class="absolute top-3 right-3 z-20 flex items-center gap-2 pointer-events-auto">
          <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-black/85 hover:bg-red-600 text-white font-bold text-xs backdrop-blur-md border border-white/20 shadow-lg transition-all flex items-center gap-1.5 hover:scale-105" title="Watch this lesson directly on YouTube">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>▶ Watch on YouTube</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    `;
  }

  renderInteractiveSlides(lesson) {
    const slides = lesson.interactiveSlides || [
      {
        slide: 1,
        title: lesson.title,
        content: lesson.overview,
        detail: 'Comprehensive curriculum lecture mode.'
      }
    ];

    const currentSlide = slides[this.currentSlideIndex] || slides[0];

    return `
      <div class="interactive-slide-deck w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-1 rounded bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 text-xs font-semibold">
              Slide ${this.currentSlideIndex + 1} of ${slides.length}
            </span>
            <span class="text-sm font-medium text-slate-300">${lesson.title}</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="slide-audio-narrate-btn" class="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-medium flex items-center gap-1.5 transition">
              <span>🔊 Read Aloud</span>
            </button>
          </div>
        </div>

        <div class="my-auto py-6 space-y-4 max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${currentSlide.title}</h2>
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            ${currentSlide.content}
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            ${currentSlide.detail}
          </p>
        </div>

        <div class="flex items-center justify-between border-t border-white/10 pt-4">
          <button id="prev-slide-btn" class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition disabled:opacity-30" ${this.currentSlideIndex === 0 ? 'disabled' : ''}>
            ← Previous Slide
          </button>
          <div class="flex items-center gap-1.5">
            ${slides.map((_, i) => `
              <span class="w-2.5 h-2.5 rounded-full transition-all ${i === this.currentSlideIndex ? 'bg-primary w-6' : 'bg-white/20'}"></span>
            `).join('')}
          </div>
          <button id="next-slide-btn" class="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-semibold transition disabled:opacity-30" ${this.currentSlideIndex === slides.length - 1 ? 'disabled' : ''}>
            Next Slide →
          </button>
        </div>
      </div>
    `;
  }

  bindEvents(container, lesson) {
    // Stream Buttons
    const primaryBtn = container.querySelector('#stream-primary-btn');
    const channelBtn = container.querySelector('#stream-channel-btn');
    const backupBtn = container.querySelector('#stream-backup-btn');
    const interactiveBtn = container.querySelector('#stream-interactive-btn');

    primaryBtn?.addEventListener('click', () => {
      this.currentStreamMode = 'primary';
      this.render(container);
    });

    channelBtn?.addEventListener('click', () => {
      this.currentStreamMode = 'channel';
      this.render(container);
    });

    backupBtn?.addEventListener('click', () => {
      this.currentStreamMode = 'backup';
      this.render(container);
    });

    interactiveBtn?.addEventListener('click', () => {
      this.currentStreamMode = 'interactive';
      this.render(container);
    });

    // Quick fix banner buttons
    container.querySelector('#quick-fix-channel-btn')?.addEventListener('click', () => {
      this.currentStreamMode = 'channel';
      this.render(container);
    });

    container.querySelector('#quick-fix-backup-btn')?.addEventListener('click', () => {
      this.currentStreamMode = 'backup';
      this.render(container);
    });

    container.querySelector('#quick-fix-slides-btn')?.addEventListener('click', () => {
      this.currentStreamMode = 'interactive';
      this.render(container);
    });

    // Mark as complete button
    const markCompleteBtn = container.querySelector('#mark-lesson-complete-btn');
    markCompleteBtn?.addEventListener('click', () => {
      const isCompleted = this.appState.toggleLessonCompleted(lesson.id);
      markCompleteBtn.className = `flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`;
      markCompleteBtn.innerHTML = `<span>${isCompleted ? '✓ Completed' : 'Mark as Watched'}</span>`;
      if (this.onProgressUpdate) this.onProgressUpdate();
    });

    // Jump to Quiz
    const quizBtn = container.querySelector('#jump-to-quiz-btn');
    quizBtn?.addEventListener('click', () => {
      this.appState.setActiveTab('quiz');
    });

    // Student notes auto-save
    const notesTextarea = container.querySelector('#lesson-student-notes');
    notesTextarea?.addEventListener('input', (e) => {
      this.saveNotes(lesson.id, e.target.value);
    });

    // Slide navigation
    const prevSlideBtn = container.querySelector('#prev-slide-btn');
    const nextSlideBtn = container.querySelector('#next-slide-btn');
    const audioBtn = container.querySelector('#slide-audio-narrate-btn');

    prevSlideBtn?.addEventListener('click', () => {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.render(container);
      }
    });

    nextSlideBtn?.addEventListener('click', () => {
      const slides = lesson.interactiveSlides || [];
      if (this.currentSlideIndex < slides.length - 1) {
        this.currentSlideIndex++;
        this.render(container);
      }
    });

    audioBtn?.addEventListener('click', () => {
      const slides = lesson.interactiveSlides || [];
      const currentSlide = slides[this.currentSlideIndex];
      if (currentSlide && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${currentSlide.title}. ${currentSlide.content}. ${currentSlide.detail}`);
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    });
  }

  saveNotes(lessonId, text) {
    try {
      localStorage.setItem(`${this.notesKeyPrefix}${lessonId}`, text);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  loadNotes(lessonId) {
    try {
      return localStorage.getItem(`${this.notesKeyPrefix}${lessonId}`) || '';
    } catch (e) {
      return '';
    }
  }
}
