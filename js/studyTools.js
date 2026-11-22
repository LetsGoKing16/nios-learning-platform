// Study Tools Suite for NIOS Secondary Platform
// Features: Mastery AI Tutor, 3D Interactive Flashcards, Custom Cards & Pomodoro Timer

import { DEFAULT_FLASHCARDS } from './data/courses.js';

export class StudyToolsHub {
  constructor(appState) {
    this.appState = appState;
    this.activeSubTab = 'ai'; // 'ai', 'flashcards', 'formulas', 'pomodoro'
    this.chatMessages = [
      {
        role: 'assistant',
        text: '👋 Hello! I am **Mastery AI**, your personal NIOS Class 10 study tutor. Ask me any question about your lessons, math problems, science concepts, or exam preparation tips!',
        time: 'Just now'
      }
    ];
    this.flashcards = this.loadFlashcards();
    this.activeCardIndex = 0;
    this.isCardFlipped = false;
    this.cardFilter = 'all'; // 'all', 'review', 'mastered'
    
    // Pomodoro Timer State
    this.pomodoroTime = 25 * 60;
    this.pomodoroRunning = false;
    this.pomodoroInterval = null;
    this.pomodoroMode = 'focus'; // 'focus' (25m), 'break' (5m)
  }

  loadFlashcards() {
    try {
      const saved = localStorage.getItem('nios_custom_flashcards');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error loading flashcards:', e);
    }
    return [...DEFAULT_FLASHCARDS];
  }

  saveFlashcards() {
    try {
      localStorage.setItem('nios_custom_flashcards', JSON.stringify(this.flashcards));
    } catch (e) {
      console.warn('Error saving flashcards:', e);
    }
  }

  render(container) {
    const t = this.appState.getTranslation();

    container.innerHTML = `
      <div class="study-tools-hub max-w-5xl mx-auto space-y-6">
        <!-- Sub-Navigation Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-card border border-border shadow-sm">
          <div class="flex items-center gap-2">
            <button class="subtab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${this.activeSubTab === 'ai' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}" data-tab="ai">
              🤖 ${t.masteryAiTitle}
            </button>
            <button class="subtab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${this.activeSubTab === 'flashcards' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}" data-tab="flashcards">
              🗂️ ${t.flashcardsTitle}
            </button>
            <button class="subtab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${this.activeSubTab === 'formulas' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}" data-tab="formulas">
              📐 Formula Sheets
            </button>
            <button class="subtab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${this.activeSubTab === 'pomodoro' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}" data-tab="pomodoro">
              ⏱️ ${t.pomodoroTitle}
            </button>
          </div>
          <div class="text-xs text-muted-foreground hidden sm:block">
            <span>Powered by NIOS Secondary Curriculum AI</span>
          </div>
        </div>

        <!-- Tab Content Body -->
        <div id="study-tools-content-area" class="w-full">
          ${this.renderSubTabContent(t)}
        </div>
      </div>
    `;

    this.bindEvents(container);
  }

  renderSubTabContent(t) {
    if (this.activeSubTab === 'ai') {
      return this.renderMasteryAi(t);
    } else if (this.activeSubTab === 'flashcards') {
      return this.renderFlashcards(t);
    } else if (this.activeSubTab === 'formulas') {
      return this.renderFormulas(t);
    } else if (this.activeSubTab === 'pomodoro') {
      return this.renderPomodoro(t);
    }
    return '';
  }

  renderMasteryAi(t) {
    const quickPrompts = [
      'Explain Lesson 2 Exponents (Math 211)',
      'Why does evaporation cause cooling? (Science 212)',
      'What were the ideals of French Revolution? (Social Science 213)',
      'Summarize "Snake Bite" story (English 202)',
      'List the 4 factors of production (Economics 214)',
      'How to prepare for NIOS Class 10 board exams?'
    ];

    return `
      <div class="mastery-ai-container rounded-3xl bg-card border border-border shadow-md overflow-hidden flex flex-col h-[650px]">
        <!-- AI Top Bar -->
        <div class="p-4 sm:p-5 border-b border-border bg-muted/30 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
              🤖
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-base text-foreground">${t.masteryAiTitle}</h3>
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Online</span>
              </div>
              <p class="text-xs text-muted-foreground">${t.masteryAiSubtitle}</p>
            </div>
          </div>
          <button id="clear-ai-chat-btn" class="text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-lg hover:bg-muted transition">
            Clear Chat
          </button>
        </div>

        <!-- Chat Messages Area -->
        <div id="ai-messages-scroll" class="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-background/50">
          ${this.chatMessages.map(msg => `
            <div class="flex gap-3.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
              ${msg.role === 'assistant' ? `
                <div class="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  AI
                </div>
              ` : ''}
              <div class="max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-white shadow-sm rounded-tr-sm' 
                  : 'bg-card border border-border text-foreground shadow-sm rounded-tl-sm'
              }">
                <div class="whitespace-pre-wrap">${this.formatAiResponse(msg.text)}</div>
                <div class="text-[10px] mt-1.5 opacity-60 text-right">${msg.time}</div>
              </div>
              ${msg.role === 'user' ? `
                <div class="w-8 h-8 rounded-xl bg-slate-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  👤
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- Quick Action Prompt Chips -->
        <div class="p-3 border-t border-border/80 bg-muted/20">
          <div class="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
            <span>⚡</span> Quick Questions for NIOS Secondary:
          </div>
          <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            ${quickPrompts.map(prompt => `
              <button class="ai-chip-btn whitespace-nowrap px-3 py-1.5 rounded-full bg-card hover:bg-primary/10 hover:border-primary border border-border text-xs text-foreground/90 transition shadow-2xs" data-prompt="${prompt}">
                ${prompt}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Message Input Box -->
        <div class="p-4 border-t border-border bg-card flex items-center gap-3">
          <input 
            type="text" 
            id="ai-user-input" 
            class="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm text-foreground" 
            placeholder="${t.aiPlaceholder}" 
          />
          <button id="send-ai-btn" class="px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold transition shadow-md flex items-center gap-2">
            <span>${t.sendPrompt}</span>
            <span>➤</span>
          </button>
        </div>
      </div>
    `;
  }

  formatAiResponse(text) {
    // Replace **bold** with <strong>
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }

  renderFlashcards(t) {
    let filtered = this.flashcards;
    if (this.cardFilter === 'review') {
      filtered = this.flashcards.filter(c => c.status === 'review');
    } else if (this.cardFilter === 'mastered') {
      filtered = this.flashcards.filter(c => c.status === 'mastered');
    }

    if (filtered.length === 0) {
      return `
        <div class="p-12 text-center rounded-3xl bg-card border border-border space-y-4">
          <div class="text-4xl">🗂️</div>
          <h3 class="text-lg font-bold text-foreground">No Cards Found in this Filter</h3>
          <p class="text-xs text-muted-foreground">Switch to "All Cards" or create a custom card below.</p>
          <button id="reset-card-filter-btn" class="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold">
            View All Cards
          </button>
        </div>
      `;
    }

    const currentCard = filtered[this.activeCardIndex % filtered.length];

    return `
      <div class="flashcards-wrapper max-w-2xl mx-auto space-y-6">
        <!-- Controls Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
          <div class="flex items-center gap-2">
            <button class="fc-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${this.cardFilter === 'all' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}" data-filter="all">
              ${t.allCards} (${this.flashcards.length})
            </button>
            <button class="fc-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${this.cardFilter === 'review' ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}" data-filter="review">
              ⚠️ ${t.needsReview} (${this.flashcards.filter(c => c.status === 'review').length})
            </button>
            <button class="fc-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${this.cardFilter === 'mastered' ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}" data-filter="mastered">
              ✓ ${t.mastered} (${this.flashcards.filter(c => c.status === 'mastered').length})
            </button>
          </div>

          <button id="add-custom-card-btn" class="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-semibold flex items-center gap-1.5 transition">
            <span>+</span> ${t.addCard}
          </button>
        </div>

        <!-- 3D Flip Card Scene -->
        <div class="flashcard-scene perspective-1000 w-full h-80 sm:h-96 cursor-pointer">
          <div id="flashcard-element" class="flashcard-inner relative w-full h-full duration-500 transform-style-3d ${this.isCardFlipped ? 'rotate-y-180' : ''}">
            <!-- Front of Card -->
            <div class="flashcard-face flashcard-front absolute inset-0 w-full h-full p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border/80 shadow-xl flex flex-col justify-between backface-hidden">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                  ${currentCard.subject} • ${currentCard.chapter}
                </span>
                <span class="text-xs text-muted-foreground">
                  Card ${(this.activeCardIndex % filtered.length) + 1} of ${filtered.length}
                </span>
              </div>

              <div class="my-auto py-4 text-center space-y-3">
                <div class="text-xs font-mono uppercase tracking-wider text-muted-foreground">Question / Prompt</div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  ${currentCard.front}
                </h3>
              </div>

              <div class="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <span>🔄</span>
                <span>${t.flipCard}</span>
              </div>
            </div>

            <!-- Back of Card -->
            <div class="flashcard-face flashcard-back absolute inset-0 w-full h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border-2 border-indigo-500/40 shadow-xl flex flex-col justify-between backface-hidden rotate-y-180">
              <div class="flex items-center justify-between border-b border-white/10 pb-3">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Concept Answer
                </span>
                <span class="text-xs text-slate-300">
                  NIOS Class 10 Syllabus
                </span>
              </div>

              <div class="my-auto py-4 space-y-3">
                <p class="text-sm sm:text-base text-slate-100 whitespace-pre-wrap leading-relaxed font-medium">
                  ${currentCard.back}
                </p>
              </div>

              <div class="text-center text-xs text-slate-400 flex items-center justify-center gap-2 border-t border-white/10 pt-3">
                <span>🔄 Click to flip back</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Rating Buttons ("Know this" vs "Review again") & Navigation -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button id="prev-card-btn" class="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-semibold transition">
            ← Previous
          </button>

          <div class="flex items-center gap-3">
            <button id="mark-review-btn" class="px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1.5">
              <span>⚠️</span> ${t.markReview}
            </button>
            <button id="mark-known-btn" class="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition shadow-md flex items-center gap-1.5">
              <span>✓</span> ${t.markKnown}
            </button>
          </div>

          <button id="next-card-btn" class="px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-semibold transition">
            Next →
          </button>
        </div>
      </div>
    `;
  }

  renderFormulas(t) {
    return `
      <div class="formulas-container max-w-4xl mx-auto space-y-6">
        <div class="p-6 rounded-3xl bg-card border border-border shadow-sm space-y-2">
          <h3 class="text-xl font-bold text-foreground">Essential Formulas & Quick Reference Sheets</h3>
          <p class="text-xs text-muted-foreground">High-yield mathematical laws, physical constants, and chemical formulas for NIOS Secondary examinations.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Mathematics Reference -->
          <div class="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h4 class="font-bold text-base text-primary flex items-center gap-2">
              <span>📐</span> Mathematics (Code 211) Formulas
            </h4>
            <div class="space-y-2.5 text-xs">
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Exponents & Radicals (Lesson 2):</div>
                <div class="text-muted-foreground mt-1">aᵐ × aⁿ = aᵐ⁺ⁿ | (aᵐ)ⁿ = aᵐⁿ | ⁿ√a = a^(1/n)</div>
              </div>
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Special Products (Lesson 4):</div>
                <div class="text-muted-foreground mt-1">(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)</div>
                <div class="text-muted-foreground">a³ + b³ = (a + b)(a² - ab + b²)</div>
              </div>
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Linear Consistency (Lesson 5):</div>
                <div class="text-muted-foreground mt-1">Parallel (No solution): a₁/a₂ = b₁/b₂ ≠ c₁/c₂</div>
              </div>
            </div>
          </div>

          <!-- Science Reference -->
          <div class="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
            <h4 class="font-bold text-base text-emerald-600 flex items-center gap-2">
              <span>🔬</span> Science & Technology (Code 212) Constants
            </h4>
            <div class="space-y-2.5 text-xs">
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Avogadro’s Constant:</div>
                <div class="text-muted-foreground mt-1">N_A = 6.022 × 10²³ particles / mole</div>
              </div>
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Latent Heat of Vaporization:</div>
                <div class="text-muted-foreground mt-1">Water at 100°C: 22.6 × 10⁵ J / kg</div>
              </div>
              <div class="p-3 rounded-xl bg-muted/40 border border-border/60">
                <div class="font-bold text-foreground">Common Chemical Equations:</div>
                <div class="text-muted-foreground mt-1">Rusting: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O</div>
                <div class="text-muted-foreground">Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPomodoro(t) {
    const minutes = Math.floor(this.pomodoroTime / 60);
    const seconds = this.pomodoroTime % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const totalDuration = this.pomodoroMode === 'focus' ? 25 * 60 : 5 * 60;
    const progressPercent = ((totalDuration - this.pomodoroTime) / totalDuration) * 100;

    return `
      <div class="pomodoro-wrapper max-w-md mx-auto p-8 rounded-3xl bg-card border border-border shadow-lg text-center space-y-6">
        <div class="space-y-1">
          <span class="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${this.pomodoroMode === 'focus' ? 'bg-primary/10 text-primary' : 'bg-emerald-500/10 text-emerald-600'}">
            ${this.pomodoroMode === 'focus' ? '🎯 Study Focus Interval' : '☕ Quick Break Interval'}
          </span>
          <h3 class="text-2xl font-black text-foreground pt-2">Pomodoro Study Timer</h3>
          <p class="text-xs text-muted-foreground">Boost focus with 25 minutes of dedicated learning followed by a 5-minute break.</p>
        </div>

        <!-- Big Circular Time Display -->
        <div class="relative w-48 h-48 mx-auto flex items-center justify-center">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="6" class="text-muted" fill="none" />
            <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="6" class="text-primary transition-all duration-300" fill="none" stroke-dasharray="276" stroke-dashoffset="${276 - (276 * progressPercent) / 100}" stroke-linecap="round" />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-4xl font-mono font-black text-foreground">${formatted}</span>
            <span class="text-[10px] text-muted-foreground font-semibold uppercase mt-1">${this.pomodoroMode}</span>
          </div>
        </div>

        <!-- Timer Controls -->
        <div class="flex items-center justify-center gap-3">
          <button id="pomo-toggle-btn" class="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-md transition">
            ${this.pomodoroRunning ? t.pauseTimer : t.startTimer}
          </button>
          <button id="pomo-reset-btn" class="px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-sm transition">
            ${t.resetTimer}
          </button>
        </div>
      </div>
    `;
  }

  bindEvents(container) {
    // Sub-tab switcher
    container.querySelectorAll('.subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeSubTab = btn.dataset.tab;
        this.render(container);
      });
    });

    if (this.activeSubTab === 'ai') {
      this.bindAiEvents(container);
    } else if (this.activeSubTab === 'flashcards') {
      this.bindFlashcardEvents(container);
    } else if (this.activeSubTab === 'pomodoro') {
      this.bindPomodoroEvents(container);
    }
  }

  bindAiEvents(container) {
    const input = container.querySelector('#ai-user-input');
    const sendBtn = container.querySelector('#send-ai-btn');
    const clearBtn = container.querySelector('#clear-ai-chat-btn');

    const handleSend = (text) => {
      const q = text || input?.value?.trim();
      if (!q) return;

      this.chatMessages.push({
        role: 'user',
        text: q,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      if (input) input.value = '';
      this.render(container);

      // Generate context-aware AI tutor response
      setTimeout(() => {
        const response = this.generateMasteryAiAnswer(q);
        this.chatMessages.push({
          role: 'assistant',
          text: response,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        this.render(container);

        // Scroll to bottom
        const scrollArea = container.querySelector('#ai-messages-scroll');
        if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
      }, 400);
    };

    sendBtn?.addEventListener('click', () => handleSend());
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    container.querySelectorAll('.ai-chip-btn').forEach(chip => {
      chip.addEventListener('click', () => {
        handleSend(chip.dataset.prompt);
      });
    });

    clearBtn?.addEventListener('click', () => {
      this.chatMessages = [
        {
          role: 'assistant',
          text: 'Chat cleared. Ask me anything about your NIOS secondary courses!',
          time: 'Just now'
        }
      ];
      this.render(container);
    });
  }

  generateMasteryAiAnswer(prompt) {
    const p = prompt.toLowerCase();

    if (p.includes('exponent') || p.includes('lesson 2') || p.includes('radical')) {
      return `**Mathematics (211) Lesson 2: Exponents & Radicals**\n\nHere are the core rules tested in NIOS Class 10:\n1. **Product Rule:** $a^m \\times a^n = a^{m+n}$\n2. **Quotient Rule:** $a^m / a^n = a^{m-n}$ ($a \\neq 0$)\n3. **Power of a Power:** $(a^m)^n = a^{mn}$\n4. **Fractional Exponents:** $a^{m/n} = \\sqrt[n]{a^m}$\n5. **Zero Exponent:** $a^0 = 1$ ($a \\neq 0$)\n\n*Pro-tip for NIOS exams:* To compare two surds with different roots (like $\\sqrt[3]{2}$ and $\\sqrt[4]{3}$), take the LCM of root orders (LCM of 3 and 4 is 12) and convert both into twelfth roots!`;
    }

    if (p.includes('evaporation') || p.includes('cooling') || p.includes('matter')) {
      return `**Science (212) Lesson 2: Matter in Our Surroundings**\n\n**Why does evaporation cause cooling?**\nWhen liquid particles evaporate from a surface, the particles with the highest kinetic energy break free into gas. To do this, they absorb their **latent heat of vaporization** from the remaining liquid and surrounding environment.\n\nBecause heat energy is drawn away, the temperature of the surroundings drops!\n\n**Real-world NIOS exam examples:**\n• Water in an earthen pot (*matka*) stays cool due to evaporation through pores.\n• Sweating cools the human body.\n• Pouring acetone/sanitizer on your palm feels instantly cold.`;
    }

    if (p.includes('french revolution') || p.includes('1789') || p.includes('social science')) {
      return `**Social Science (213) Lesson 3: The French Revolution (1789)**\n\n**Key Exam Takeaways:**\n1. **Causes:** Despotic rule of King Louis XVI, financial bankruptcy, heavy taxation on the Third Estate (commoners), and Enlightenment ideas from philosophers like Voltaire, Rousseau, and Montesquieu.\n2. **Outbreak:** Storming of the Bastille prison fortress on **July 14, 1789**.\n3. **Guiding Motto:** *Liberté, Égalité, Fraternité* (Liberty, Equality, Fraternity).\n4. **Outcome:** Abolished feudalism and absolute monarchy; published the *Declaration of the Rights of Man and of the Citizen*.`;
    }

    if (p.includes('snake bite') || p.includes('raja') || p.includes('english')) {
      return `**English (202) Lesson 1: Snake Bite**\n\n**Plot Summary & Themes:**\n• Young boy **Raja** is stung by a bee/wasp in the compound garden.\n• His anxious grandparents notice the swelling and mistakenly conclude he has been bitten by a venomous snake.\n• They rush him to an old medicine man who chants mantras while rinsing water.\n• Because Raja recovers naturally from the bee sting, the old man takes credit for "curing" the snake bite!\n\n**Theme:** Highlights how fear and unscientific superstitions blind people, and contrasts traditional faith healing with scientific facts.`;
    }

    if (p.includes('factors of production') || p.includes('economics')) {
      return `**Economics (214) Lesson 4: Factors of Production**\n\nEvery economic production activity requires 4 basic factors:\n1. **Land:** Natural resources, water, forests, mineral deposits. *(Reward: Rent)*\n2. **Labor:** Human physical and mental exertion. *(Reward: Wages)*\n3. **Capital:** Man-made equipment, tools, machinery, and factories. *(Reward: Interest)*\n4. **Entrepreneur:** The visionary coordinator who takes financial risk. *(Reward: Profit)*`;
    }

    if (p.includes('prepare') || p.includes('exam') || p.includes('board')) {
      return `**Top 5 Study Strategies for NIOS Secondary Examinations:**\n\n1. **Watch Restored Video Lessons:** Complete the lesson videos here on the platform and take notes.\n2. **Do the Lesson Quizzes:** Every lesson has a dedicated quiz tab. Aim for 100% accuracy to earn the Gold badge.\n3. **Drill Fact Fluency Daily:** Spend 5 minutes daily in the 60s Blitz mode to lock formulas into long-term memory.\n4. **Keep Your Daily Streak Active:** Consistency beats cramming! Aim for at least 20 minutes every single day.\n5. **Review Tutor Flashcards:** Use the 3D flashcards tab for rapid revision before tests!`;
    }

    return `That is a great question on the **NIOS Secondary Curriculum**! Let me break it down for you:\n\n• **Core Concept:** Whenever tackling this topic, always start with the fundamental definition in your NIOS textbook.\n• **Key Rule:** Pay attention to units, conditions, and exceptions.\n• **Application:** Relate the theory directly to sample problems in your lesson quiz.\n\nWould you like me to quiz you on this topic or explain a specific lesson formula?`;
  }

  bindFlashcardEvents(container) {
    const cardElement = container.querySelector('#flashcard-element');
    cardElement?.addEventListener('click', () => {
      this.isCardFlipped = !this.isCardFlipped;
      if (cardElement) {
        cardElement.classList.toggle('rotate-y-180', this.isCardFlipped);
      }
    });

    container.querySelector('#prev-card-btn')?.addEventListener('click', () => {
      if (this.activeCardIndex > 0) {
        this.activeCardIndex--;
        this.isCardFlipped = false;
        this.render(container);
      }
    });

    container.querySelector('#next-card-btn')?.addEventListener('click', () => {
      this.activeCardIndex++;
      this.isCardFlipped = false;
      this.render(container);
    });

    container.querySelector('#mark-known-btn')?.addEventListener('click', () => {
      if (this.flashcards[this.activeCardIndex]) {
        this.flashcards[this.activeCardIndex].status = 'mastered';
        this.saveFlashcards();
        this.activeCardIndex++;
        this.isCardFlipped = false;
        this.render(container);
      }
    });

    container.querySelector('#mark-review-btn')?.addEventListener('click', () => {
      if (this.flashcards[this.activeCardIndex]) {
        this.flashcards[this.activeCardIndex].status = 'review';
        this.saveFlashcards();
        this.activeCardIndex++;
        this.isCardFlipped = false;
        this.render(container);
      }
    });

    container.querySelectorAll('.fc-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.cardFilter = btn.dataset.filter;
        this.activeCardIndex = 0;
        this.isCardFlipped = false;
        this.render(container);
      });
    });

    container.querySelector('#reset-card-filter-btn')?.addEventListener('click', () => {
      this.cardFilter = 'all';
      this.render(container);
    });

    container.querySelector('#add-custom-card-btn')?.addEventListener('click', () => {
      const q = prompt('Enter the Question / Prompt for the Front of the Card:');
      if (!q) return;
      const a = prompt('Enter the Answer / Concept notes for the Back of the Card:');
      if (!a) return;

      this.flashcards.unshift({
        id: `fc-custom-${Date.now()}`,
        subject: this.appState.getCurrentSubject().name,
        chapter: 'Custom Notecard',
        front: q,
        back: a,
        status: 'all'
      });
      this.saveFlashcards();
      this.cardFilter = 'all';
      this.activeCardIndex = 0;
      this.isCardFlipped = false;
      this.render(container);
    });
  }

  bindPomodoroEvents(container) {
    const toggleBtn = container.querySelector('#pomo-toggle-btn');
    const resetBtn = container.querySelector('#pomo-reset-btn');

    toggleBtn?.addEventListener('click', () => {
      this.pomodoroRunning = !this.pomodoroRunning;
      if (this.pomodoroRunning) {
        clearInterval(this.pomodoroInterval);
        this.pomodoroInterval = setInterval(() => {
          this.pomodoroTime--;
          if (this.pomodoroTime <= 0) {
            clearInterval(this.pomodoroInterval);
            this.pomodoroRunning = false;
            this.pomodoroMode = this.pomodoroMode === 'focus' ? 'break' : 'focus';
            this.pomodoroTime = this.pomodoroMode === 'focus' ? 25 * 60 : 5 * 60;
            alert(this.pomodoroMode === 'focus' ? 'Break over! Ready for the next study session?' : 'Great job! Take a 5-minute breather.');
          }
          this.render(container);
        }, 1000);
      } else {
        clearInterval(this.pomodoroInterval);
      }
      this.render(container);
    });

    resetBtn?.addEventListener('click', () => {
      clearInterval(this.pomodoroInterval);
      this.pomodoroRunning = false;
      this.pomodoroTime = this.pomodoroMode === 'focus' ? 25 * 60 : 5 * 60;
      this.render(container);
    });
  }
}
