// Fact Fluency Arena - Speed & Accuracy Recall Engine
// Enables students to build automaticity and test recall across secondary subjects

import { FACT_FLUENCY_POOL } from './data/courses.js';

export class FactFluencyArena {
  constructor(appState, onGameComplete) {
    this.appState = appState;
    this.onGameComplete = onGameComplete;
    this.mode = 'blitz'; // 'blitz', 'survival', 'practice'
    this.selectedSubject = 'all';
    this.isPlaying = false;
    this.timer = 60;
    this.timerInterval = null;
    this.lives = 3;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.currentIndex = 0;
    this.currentDeck = [];
    this.missedItems = [];
    this.audioContext = null;
  }

  initAudio() {
    if (!this.audioContext && (window.AudioContext || window.webkitAudioContext)) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playTone(type) {
    try {
      this.initAudio();
      if (!this.audioContext) return;
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      const now = this.audioContext.currentTime;

      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.linearRampToValueAtTime(164.81, now + 0.2); // E3
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'gameover') {
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(150, now + 0.4);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      // Audio optional
    }
  }

  prepareDeck() {
    let pool = [...FACT_FLUENCY_POOL];
    if (this.selectedSubject !== 'all') {
      pool = pool.filter(item => item.subject.toLowerCase().includes(this.selectedSubject.toLowerCase()));
    }
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    this.currentDeck = pool;
    this.currentIndex = 0;
    this.missedItems = [];
    this.streak = 0;
    this.maxStreak = 0;
    this.score = 0;
    this.lives = 3;
    this.timer = 60;
  }

  startGame(mode) {
    this.mode = mode;
    this.prepareDeck();
    this.isPlaying = true;

    if (this.mode === 'blitz') {
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.timer--;
        const timerElem = document.getElementById('fluency-timer-text');
        if (timerElem) timerElem.innerText = `${this.timer}s`;

        if (this.timer <= 0) {
          this.endGame();
        }
      }, 1000);
    }
  }

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);
    this.playTone('gameover');

    // Save stats in appState
    this.appState.recordFactFluencyScore({
      mode: this.mode,
      score: this.score,
      maxStreak: this.maxStreak,
      subject: this.selectedSubject,
      date: new Date().toISOString()
    });

    if (this.onGameComplete) {
      this.onGameComplete();
    }

    const container = document.getElementById('fact-fluency-root');
    if (container) {
      this.render(container);
    }
  }

  handleAnswer(selectedOption) {
    if (!this.isPlaying) return;

    const currentItem = this.currentDeck[this.currentIndex % this.currentDeck.length];
    const isCorrect = selectedOption === currentItem.answer;

    if (isCorrect) {
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      
      let multiplier = 1;
      if (this.streak >= 10) multiplier = 3;
      else if (this.streak >= 5) multiplier = 2;
      else if (this.streak >= 3) multiplier = 1.5;

      const points = Math.round(10 * multiplier);
      this.score += points;
      this.playTone('correct');
    } else {
      this.streak = 0;
      this.missedItems.push(currentItem);
      this.playTone('wrong');

      if (this.mode === 'survival') {
        this.lives--;
        if (this.lives <= 0) {
          this.endGame();
          return;
        }
      }
    }

    this.currentIndex++;
    const container = document.getElementById('fact-fluency-root');
    if (container) {
      this.render(container);
    }
  }

  render(container) {
    const t = this.appState.getTranslation();

    if (!this.isPlaying) {
      this.renderLobby(container, t);
    } else {
      this.renderGamePlay(container, t);
    }
  }

  renderLobby(container, t) {
    const bestScore = this.appState.getBestFluencyScore();

    container.innerHTML = `
      <div class="fact-fluency-lobby max-w-3xl mx-auto space-y-6">
        <!-- Hero Header -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-800/40 text-white shadow-xl space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-semibold text-indigo-300">
              ⚡ Rapid Recall Training
            </div>
            ${bestScore > 0 ? `
              <div class="text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/30">
                🏆 Personal Best: ${bestScore} pts
              </div>
            ` : ''}
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">${t.factFluencyTitle}</h2>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            ${t.factFluencySubtitle}
          </p>

          <!-- Subject Selection Chips -->
          <div class="pt-2">
            <label class="block text-xs font-semibold text-slate-400 mb-2">Subject Focus:</label>
            <div class="flex flex-wrap gap-2">
              ${['all', 'Mathematics', 'Science', 'Social Science', 'Economics', 'English'].map(subj => `
                <button class="subject-chip px-3 py-1.5 rounded-lg text-xs font-semibold transition ${this.selectedSubject === subj ? 'bg-primary text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'}" data-subject="${subj}">
                  ${subj === 'all' ? '🌐 All Subjects Mix' : subj}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Mode Select Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- 60s Blitz -->
          <div class="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold">
                ⏱️
              </div>
              <h3 class="font-bold text-lg text-foreground">${t.modeBlitz}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Race the 60-second clock! Build rapid mental recall and multiplier streaks.
              </p>
            </div>
            <button class="start-mode-btn w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition" data-mode="blitz">
              Play 60s Blitz
            </button>
          </div>

          <!-- 3-Lives Survival -->
          <div class="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-rose-500/60 transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-2xl font-bold">
                ❤️
              </div>
              <h3 class="font-bold text-lg text-foreground">${t.modeSurvival}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                You have 3 lives. One mistake costs a heart. Test how high your streak can climb!
              </p>
            </div>
            <button class="start-mode-btn w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-md transition" data-mode="survival">
              Play Survival
            </button>
          </div>

          <!-- Untimed Practice -->
          <div class="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-emerald-500/60 transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold">
                🧘
              </div>
              <h3 class="font-bold text-lg text-foreground">${t.modePractice}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                No time limits or penalties. Relaxed practice to memorize definitions and formulas.
              </p>
            </div>
            <button class="start-mode-btn w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition" data-mode="practice">
              Start Practice
            </button>
          </div>
        </div>

        <!-- Missed Items Review Section if any from previous run -->
        ${this.missedItems.length > 0 ? `
          <div class="p-5 rounded-2xl bg-card border border-border shadow-sm space-y-3">
            <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
              <span>💡</span> Review Concepts from Previous Run (${this.missedItems.length})
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${this.missedItems.map(item => `
                <div class="p-3 rounded-xl bg-muted/40 border border-border text-xs space-y-1">
                  <div class="font-semibold text-foreground">${item.question}</div>
                  <div class="text-emerald-600 font-bold">Answer: ${item.answer}</div>
                  <div class="text-muted-foreground text-[11px]">${item.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Bind subject chips
    container.querySelectorAll('.subject-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.selectedSubject = chip.dataset.subject;
        this.renderLobby(container, t);
      });
    });

    // Bind start buttons
    container.querySelectorAll('.start-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.startGame(btn.dataset.mode);
        this.render(container);
      });
    });
  }

  renderGamePlay(container, t) {
    const currentItem = this.currentDeck[this.currentIndex % this.currentDeck.length];
    const multiplier = this.streak >= 10 ? '3.0x' : (this.streak >= 5 ? '2.0x' : (this.streak >= 3 ? '1.5x' : '1.0x'));

    container.innerHTML = `
      <div class="fact-fluency-game max-w-2xl mx-auto space-y-6">
        <!-- Live Game Status Bar -->
        <div class="p-4 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-between gap-4">
          <!-- Left: Mode / Timer / Lives -->
          <div class="flex items-center gap-4">
            ${this.mode === 'blitz' ? `
              <div class="flex items-center gap-2 bg-blue-500/10 text-blue-600 font-mono font-bold px-3 py-1.5 rounded-xl border border-blue-500/20 text-sm">
                <span>⏱️</span>
                <span id="fluency-timer-text">${this.timer}s</span>
              </div>
            ` : ''}

            ${this.mode === 'survival' ? `
              <div class="flex items-center gap-1.5 text-rose-500 font-bold px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-sm">
                ${'❤️'.repeat(Math.max(0, this.lives))}
              </div>
            ` : ''}

            <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
              ${currentItem.subject}
            </span>
          </div>

          <!-- Right: Streak and Score -->
          <div class="flex items-center gap-3">
            <div class="text-right">
              <div class="text-xs text-muted-foreground">Combo</div>
              <div class="text-xs font-extrabold text-amber-500">🔥 ${this.streak} (${multiplier})</div>
            </div>
            <div class="h-8 w-px bg-border"></div>
            <div class="text-right">
              <div class="text-xs text-muted-foreground">Score</div>
              <div class="text-lg font-black text-foreground">${this.score}</div>
            </div>
            <button id="quit-fluency-btn" class="p-1.5 rounded-lg text-muted-foreground hover:bg-muted text-xs ml-1">
              ✕
            </button>
          </div>
        </div>

        <!-- Question Prompt Card -->
        <div class="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-lg text-center space-y-8 animate-fadeIn">
          <div class="space-y-3">
            <span class="text-xs font-mono font-bold text-primary">Question ${this.currentIndex + 1}</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              ${currentItem.question}
            </h2>
          </div>

          <!-- 4 Fast Options -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            ${currentItem.options.map(opt => `
              <button class="fluency-option-btn p-4 rounded-xl border border-border/80 hover:border-primary hover:bg-primary/5 active:scale-95 transition-all font-bold text-base text-foreground shadow-sm" data-option="${opt}">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Quit button
    container.querySelector('#quit-fluency-btn')?.addEventListener('click', () => {
      this.endGame();
    });

    // Options click
    container.querySelectorAll('.fluency-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.handleAnswer(btn.dataset.option);
      });
    });
  }
}
