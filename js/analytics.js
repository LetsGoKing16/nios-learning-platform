// Learning Progress & Analytics Engine for NIOS Secondary Platform
// Includes Interactive Pie/Donut Chart, Study Time Tracker & Syllabus Completion Stats

export class AnalyticsDashboard {
  constructor(appState) {
    this.appState = appState;
  }

  render(container) {
    const t = this.appState.getTranslation();
    const stats = this.appState.getAnalyticsStats();

    container.innerHTML = `
      <div class="analytics-dashboard max-w-5xl mx-auto space-y-6">
        <!-- Top Metrics Cards Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Total Study Time -->
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div class="flex items-center justify-between text-muted-foreground">
              <span class="text-xs font-semibold">${t.totalStudyTime}</span>
              <span class="text-lg">⏱️</span>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-foreground">
              ${stats.totalMinutes} <span class="text-sm font-normal text-muted-foreground">${t.minutes}</span>
            </div>
            <div class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>●</span> Active Learning Tracked
            </div>
          </div>

          <!-- Lessons Completed -->
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div class="flex items-center justify-between text-muted-foreground">
              <span class="text-xs font-semibold">${t.lessonsCompleted}</span>
              <span class="text-lg">✅</span>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-foreground">
              ${stats.completedLessonsCount} <span class="text-sm font-normal text-muted-foreground">/ ${stats.totalLessonsCount}</span>
            </div>
            <div class="text-[11px] text-primary font-semibold">
              ${stats.completionRate}% Syllabus Complete
            </div>
          </div>

          <!-- Average Quiz Score -->
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div class="flex items-center justify-between text-muted-foreground">
              <span class="text-xs font-semibold">${t.averageQuizScore}</span>
              <span class="text-lg">📝</span>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-foreground">
              ${stats.averageQuizScore}%
            </div>
            <div class="text-[11px] text-amber-500 font-semibold">
              ${stats.quizzesAttempted} Quizzes Attempted
            </div>
          </div>

          <!-- Facts Mastered -->
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-2">
            <div class="flex items-center justify-between text-muted-foreground">
              <span class="text-xs font-semibold">${t.factsMastered}</span>
              <span class="text-lg">⚡</span>
            </div>
            <div class="text-2xl sm:text-3xl font-black text-foreground">
              ${stats.factsMasteredCount}
            </div>
            <div class="text-[11px] text-purple-600 font-semibold">
              Best Streak: 🔥 ${stats.bestStreak}
            </div>
          </div>
        </div>

        <!-- Middle Section: Pie Chart & Subject Breakdown -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <!-- Interactive Pie / Donut Chart (3 cols) -->
          <div class="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-extrabold text-lg text-foreground">${t.studyDistribution}</h3>
                <p class="text-xs text-muted-foreground">Proportion of study effort and mastery across subjects</p>
              </div>
              <span class="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold">
                Live Chart
              </span>
            </div>

            <!-- SVG Pie Chart Component -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
              <div class="relative w-56 h-56 flex-shrink-0">
                ${this.renderSvgPieChart(stats.subjectBreakdown)}
              </div>

              <!-- Legend -->
              <div class="space-y-3 flex-1 w-full max-w-xs">
                ${stats.subjectBreakdown.map(item => `
                  <div class="flex items-center justify-between text-xs p-2 rounded-lg bg-muted/40 border border-border/50">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3.5 h-3.5 rounded-full flex-shrink-0" style="background-color: ${item.color}"></span>
                      <span class="font-semibold text-foreground truncate max-w-[120px]">${item.name}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-foreground">${item.percentage}%</span>
                      <span class="text-muted-foreground">(${item.minutes}m)</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Subject Completion Progress Bars (2 cols) -->
          <div class="lg:col-span-2 p-6 rounded-3xl bg-card border border-border shadow-sm space-y-5">
            <h3 class="font-extrabold text-base text-foreground">Syllabus Completion</h3>
            <div class="space-y-4">
              ${stats.subjectBreakdown.map(subj => `
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-foreground flex items-center gap-1.5">
                      <span>${subj.icon}</span> ${subj.name}
                    </span>
                    <span class="font-mono text-muted-foreground">${subj.completed}/${subj.total} lessons</span>
                  </div>
                  <div class="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500" style="width: ${subj.lessonProgress}%; background-color: ${subj.color}"></div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Export / Reset Data Actions -->
            <div class="pt-4 border-t border-border flex items-center justify-between gap-2">
              <button id="export-stats-btn" class="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-semibold transition">
                📥 Export Report
              </button>
              <button id="reset-stats-btn" class="px-3 py-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 text-xs font-semibold transition">
                Reset Progress
              </button>
            </div>
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-4">
          <h3 class="font-extrabold text-base text-foreground">Recent Learning Milestones</h3>
          <div class="space-y-2">
            ${stats.recentActivities.length > 0 ? stats.recentActivities.map(act => `
              <div class="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/60 text-xs">
                <div class="flex items-center gap-3">
                  <span class="text-base">${act.icon}</span>
                  <div>
                    <span class="font-bold text-foreground">${act.title}</span>
                    <span class="text-muted-foreground ml-2">${act.desc}</span>
                  </div>
                </div>
                <span class="text-muted-foreground text-[11px]">${act.time}</span>
              </div>
            `).join('') : `
              <div class="p-4 text-center text-xs text-muted-foreground">
                No milestones recorded yet. Watch a video or take a lesson quiz to populate your live feed!
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    this.bindEvents(container);
  }

  renderSvgPieChart(breakdown) {
    const total = breakdown.reduce((acc, curr) => acc + (curr.minutes || 1), 0);
    let cumulativeAngle = 0;
    const paths = [];

    breakdown.forEach(item => {
      const sliceValue = item.minutes || 1;
      const angle = (sliceValue / total) * 360;
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + angle;
      cumulativeAngle += angle;

      const x1 = 100 + 80 * Math.cos((Math.PI * (startAngle - 90)) / 180);
      const y1 = 100 + 80 * Math.sin((Math.PI * (startAngle - 90)) / 180);
      const x2 = 100 + 80 * Math.cos((Math.PI * (endAngle - 90)) / 180);
      const y2 = 100 + 80 * Math.sin((Math.PI * (endAngle - 90)) / 180);

      const largeArcFlag = angle > 180 ? 1 : 0;
      const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      paths.push(`
        <path d="${pathData}" fill="${item.color}" stroke="var(--background, #fff)" stroke-width="2.5" class="hover:opacity-85 transition-opacity cursor-pointer">
          <title>${item.name}: ${item.percentage}% (${item.minutes} mins)</title>
        </path>
      `);
    });

    return `
      <svg viewBox="0 0 200 200" class="w-full h-full transform -rotate-90">
        ${paths.join('')}
        <!-- Donut Cutout Center -->
        <circle cx="100" cy="100" r="48" fill="var(--card, #ffffff)" />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span class="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total</span>
        <span class="text-xl font-black text-foreground">${this.appState.getAnalyticsStats().totalMinutes}m</span>
      </div>
    `;
  }

  bindEvents(container) {
    container.querySelector('#export-stats-btn')?.addEventListener('click', () => {
      const stats = this.appState.getAnalyticsStats();
      const report = `NIOS Academy - Student Learning Report\nDate: ${new Date().toLocaleDateString()}\nTotal Study Time: ${stats.totalMinutes} minutes\nLessons Completed: ${stats.completedLessonsCount} / ${stats.totalLessonsCount} (${stats.completionRate}%)\nAverage Quiz Accuracy: ${stats.averageQuizScore}%\nFacts Mastered: ${stats.factsMasteredCount}\nBest Streak: ${stats.bestStreak} days\n`;
      
      const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `NIOS_Student_Report_${Date.now()}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    });

    container.querySelector('#reset-stats-btn')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your study analytics and quiz progress?')) {
        this.appState.resetAnalytics();
        this.render(container);
      }
    });
  }
}
