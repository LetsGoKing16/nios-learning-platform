// Daily Streak & Activity Engine for NIOS Secondary Platform
// Encourages consistent learning habits with daily goals and streak tracking

export class StreakManager {
  constructor() {
    this.storageKey = 'nios_streak_data';
    this.data = this.loadData();
    this.checkDayTransition();
  }

  loadData() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('StreakManager load error:', e);
    }

    const todayStr = this.getTodayString();
    return {
      currentStreak: 5, // Welcoming initial momentum
      bestStreak: 12,
      lastActiveDate: todayStr,
      activeDates: [
        this.getOffsetDateString(-4),
        this.getOffsetDateString(-3),
        this.getOffsetDateString(-2),
        this.getOffsetDateString(-1),
        todayStr
      ],
      todayStudyMinutes: 18,
      dailyGoalMinutes: 25,
      todayQuizzes: 1
    };
  }

  saveData() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.warn('StreakManager save error:', e);
    }
  }

  getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  getOffsetDateString(daysOffset) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  checkDayTransition() {
    const todayStr = this.getTodayString();
    if (this.data.lastActiveDate !== todayStr) {
      const yesterdayStr = this.getOffsetDateString(-1);
      if (this.data.lastActiveDate === yesterdayStr) {
        // Streak is continuous
      } else {
        // Missed more than 1 day, reset or adjust
        if (this.data.currentStreak > 1) {
          // Graceful fall
        }
      }
      this.data.todayStudyMinutes = 0;
      this.data.todayQuizzes = 0;
      this.saveData();
    }
  }

  recordActivity(minutesGained = 0, quizDone = false) {
    const todayStr = this.getTodayString();
    if (!this.data.activeDates.includes(todayStr)) {
      this.data.activeDates.push(todayStr);
      this.data.currentStreak += 1;
      if (this.data.currentStreak > this.data.bestStreak) {
        this.data.bestStreak = this.data.currentStreak;
      }
    }

    this.data.lastActiveDate = todayStr;
    if (minutesGained > 0) {
      this.data.todayStudyMinutes += minutesGained;
    }
    if (quizDone) {
      this.data.todayQuizzes += 1;
    }

    this.saveData();
  }

  getStreak() {
    return this.data.currentStreak;
  }

  getBestStreak() {
    return this.data.bestStreak;
  }

  getDailyProgressPercent() {
    const p = (this.data.todayStudyMinutes / this.data.dailyGoalMinutes) * 100;
    return Math.min(100, Math.round(p));
  }

  renderStreakWidget(container) {
    const streak = this.data.currentStreak;
    const progress = this.getDailyProgressPercent();
    const last7Days = [-6, -5, -4, -3, -2, -1, 0].map(offset => {
      const dateStr = this.getOffsetDateString(offset);
      const dayName = new Date(Date.now() + offset * 86400000).toLocaleDateString([], { weekday: 'narrow' });
      const isActive = this.data.activeDates.includes(dateStr);
      const isToday = offset === 0;
      return { dateStr, dayName, isActive, isToday };
    });

    container.innerHTML = `
      <div class="streak-widget p-4 rounded-2xl bg-card border border-border shadow-sm flex flex-wrap items-center justify-between gap-4">
        <!-- Streak Icon & Count -->
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center text-2xl shadow-inner">
            🔥
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-lg font-black text-foreground">${streak} Day Streak</span>
              <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold border border-emerald-500/20">Active</span>
            </div>
            <p class="text-xs text-muted-foreground">Keep studying daily to maintain your study flame!</p>
          </div>
        </div>

        <!-- 7-Day Mini Tracker -->
        <div class="flex items-center gap-1.5 bg-muted/40 p-2 rounded-xl border border-border/60">
          ${last7Days.map(d => `
            <div class="flex flex-col items-center gap-1">
              <span class="text-[10px] text-muted-foreground font-semibold">${d.dayName}</span>
              <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                d.isActive 
                  ? 'bg-amber-500 text-white shadow-xs' 
                  : 'bg-muted text-muted-foreground/60'
              } ${d.isToday ? 'ring-2 ring-amber-500/50' : ''}">
                ${d.isActive ? '🔥' : '·'}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Daily Goal Meter -->
        <div class="flex items-center gap-3">
          <div class="text-right">
            <span class="text-xs font-bold text-foreground">${this.data.todayStudyMinutes} / ${this.data.dailyGoalMinutes} mins</span>
            <div class="text-[10px] text-muted-foreground">Today’s Goal</div>
          </div>
          <div class="relative w-10 h-10 flex items-center justify-center">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path class="text-muted" stroke-width="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path class="text-amber-500" stroke-width="3.5" stroke-dasharray="${progress}, 100" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <span class="absolute text-[10px] font-bold text-foreground">${progress}%</span>
          </div>
        </div>
      </div>
    `;
  }
}
