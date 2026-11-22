// Interactive Lesson Quiz Engine for NIOS Secondary Platform
// Quizzes students on each lesson/video with instant explanations and score tracking

export class QuizEngine {
  constructor(appState, onScoreSubmitted) {
    this.appState = appState;
    this.onScoreSubmitted = onScoreSubmitted;
    this.currentQuestionIndex = 0;
    this.userAnswers = []; // stores { questionId, selectedIndex, isCorrect }
    this.isAnswerSubmitted = false;
    this.quizCompleted = false;
  }

  reset() {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.isAnswerSubmitted = false;
    this.quizCompleted = false;
  }

  render(container) {
    const lesson = this.appState.getCurrentLesson();
    if (!lesson) {
      container.innerHTML = `<div class="p-8 text-center text-gray-500">No lesson selected.</div>`;
      return;
    }

    const t = this.appState.getTranslation();
    const quizzes = lesson.quizzes || [];

    if (quizzes.length === 0) {
      container.innerHTML = `
        <div class="p-12 text-center rounded-2xl bg-card border border-border space-y-4">
          <div class="text-4xl">📝</div>
          <h3 class="text-lg font-bold text-foreground">Quiz Coming Soon</h3>
          <p class="text-sm text-muted-foreground">The quiz for ${lesson.title} is currently being prepared by the curriculum team.</p>
          <button id="back-to-video-btn" class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold">
            Watch Lesson Video
          </button>
        </div>
      `;
      container.querySelector('#back-to-video-btn')?.addEventListener('click', () => {
        this.appState.setActiveTab('videos');
      });
      return;
    }

    if (this.quizCompleted) {
      this.renderSummary(container, lesson, quizzes, t);
      return;
    }

    const q = quizzes[this.currentQuestionIndex];
    const totalQuestions = quizzes.length;
    const currentAnswer = this.userAnswers[this.currentQuestionIndex];

    container.innerHTML = `
      <div class="quiz-container max-w-3xl mx-auto space-y-6">
        <!-- Quiz Header -->
        <div class="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                ${t.quizTitle}
              </span>
              <span class="text-xs text-muted-foreground">${this.appState.getCurrentSubject().name}</span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-foreground mt-1">${lesson.title}</h2>
          </div>

          <!-- Progress Pill -->
          <div class="flex items-center gap-3">
            <div class="text-right">
              <span class="text-xs text-muted-foreground">Progress</span>
              <div class="text-sm font-bold text-foreground">${this.currentQuestionIndex + 1} / ${totalQuestions}</div>
            </div>
            <div class="w-16 h-2 bg-muted rounded-full overflow-hidden">
              <div class="h-full bg-primary transition-all duration-300" style="width: ${((this.currentQuestionIndex + 1) / totalQuestions) * 100}%"></div>
            </div>
          </div>
        </div>

        <!-- Question Card -->
        <div class="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-md space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-mono font-bold text-primary">Question ${this.currentQuestionIndex + 1}</span>
            <h3 class="text-lg sm:text-xl font-bold text-foreground leading-snug">${q.question}</h3>
          </div>

          <!-- Options Grid -->
          <div class="options-list space-y-3">
            ${q.options.map((opt, idx) => {
              let optionClass = 'border-border/80 hover:border-primary/60 hover:bg-muted/40';
              let badge = `<span class="w-7 h-7 rounded-full bg-muted text-foreground/80 flex items-center justify-center text-xs font-bold font-mono">${String.fromCharCode(65 + idx)}</span>`;

              if (this.isAnswerSubmitted) {
                if (idx === q.correctIndex) {
                  optionClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 font-semibold shadow-sm';
                  badge = `<span class="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</span>`;
                } else if (currentAnswer && currentAnswer.selectedIndex === idx && idx !== q.correctIndex) {
                  optionClass = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-300 font-semibold';
                  badge = `<span class="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold">✕</span>`;
                } else {
                  optionClass = 'opacity-50 border-border bg-muted/20';
                }
              } else if (currentAnswer && currentAnswer.selectedIndex === idx) {
                optionClass = 'border-primary bg-primary/10 text-primary font-semibold ring-2 ring-primary/20';
              }

              return `
                <button class="option-btn w-full p-4 rounded-xl border text-left flex items-center gap-3.5 transition-all text-sm sm:text-base text-foreground ${optionClass}" data-index="${idx}" ${this.isAnswerSubmitted ? 'disabled' : ''}>
                  ${badge}
                  <span class="flex-1">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Explanation Box (Appears when submitted) -->
          ${this.isAnswerSubmitted ? `
            <div class="explanation-box p-4 rounded-xl border ${currentAnswer.isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'} space-y-2 animate-fadeIn">
              <div class="flex items-center gap-2">
                <span class="text-base">${currentAnswer.isCorrect ? '🎉 Great Job!' : '💡 Concept Rationale'}</span>
                <span class="text-xs font-bold ${currentAnswer.isCorrect ? 'text-emerald-600' : 'text-amber-600'}">
                  ${currentAnswer.isCorrect ? 'Correct Answer' : 'Explanation'}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                ${q.explanation}
              </p>
            </div>
          ` : ''}

          <!-- Bottom Action Buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-border">
            <button id="prev-question-btn" class="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-semibold transition disabled:opacity-30" ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>
              ← Previous
            </button>

            ${!this.isAnswerSubmitted ? `
              <button id="submit-answer-btn" class="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold shadow-md transition disabled:opacity-40" ${!currentAnswer ? 'disabled' : ''}>
                ${t.submitAnswer}
              </button>
            ` : `
              <button id="next-question-btn" class="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md transition">
                ${this.currentQuestionIndex < totalQuestions - 1 ? t.nextQuestion + ' →' : 'Finish & View Results 🏆'}
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    this.bindEvents(container, lesson, quizzes);
  }

  renderSummary(container, lesson, quizzes, t) {
    const total = quizzes.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctCount / total) * 100);

    let badge = '🥉 Bronze Learner';
    let badgeClass = 'text-amber-600 bg-amber-500/10 border-amber-500/30';
    let message = 'Good start! Review key concepts to improve your score.';

    if (percentage === 100) {
      badge = '🏆 Master Scholar (Gold)';
      badgeClass = 'text-amber-500 bg-amber-500/20 border-amber-500/40';
      message = 'Outstanding perfection! You have thoroughly mastered this lesson.';
    } else if (percentage >= 75) {
      badge = '🥈 Advanced Scholar (Silver)';
      badgeClass = 'text-blue-500 bg-blue-500/20 border-blue-500/40';
      message = 'Impressive work! You have strong command over this topic.';
    } else if (percentage < 50) {
      badge = '📖 Needs Review';
      badgeClass = 'text-rose-500 bg-rose-500/20 border-rose-500/40';
      message = 'Take another look at the restored video lecture and chapter notes.';
    }

    // Save score to appState
    this.appState.recordQuizResult(lesson.id, {
      lessonTitle: lesson.title,
      subjectId: this.appState.getCurrentSubject().id,
      score: correctCount,
      total: total,
      percentage: percentage,
      date: new Date().toISOString()
    });

    if (this.onScoreSubmitted) {
      this.onScoreSubmitted();
    }

    container.innerHTML = `
      <div class="quiz-summary-container max-w-xl mx-auto p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-xl text-center space-y-6">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-4xl shadow-inner">
          ${percentage >= 75 ? '🎉' : '📚'}
        </div>

        <div class="space-y-2">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}">
            ${badge}
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground">Quiz Completed!</h2>
          <p class="text-sm text-muted-foreground">${message}</p>
        </div>

        <!-- Score Meter -->
        <div class="p-6 rounded-2xl bg-muted/40 border border-border/80 grid grid-cols-3 gap-4">
          <div>
            <div class="text-2xl font-black text-foreground">${correctCount} / ${total}</div>
            <div class="text-xs text-muted-foreground">Score</div>
          </div>
          <div>
            <div class="text-2xl font-black ${percentage >= 75 ? 'text-emerald-500' : 'text-primary'}">${percentage}%</div>
            <div class="text-xs text-muted-foreground">${t.accuracy}</div>
          </div>
          <div>
            <div class="text-2xl font-black text-amber-500">+${correctCount * 15}</div>
            <div class="text-xs text-muted-foreground">XP Points</div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button id="retake-quiz-btn" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-semibold transition">
            🔄 ${t.retakeQuiz}
          </button>
          <button id="summary-back-video-btn" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition shadow-md">
            🎥 Return to Classroom
          </button>
          <button id="view-analytics-btn" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition shadow-md">
            📊 View Analytics
          </button>
        </div>
      </div>
    `;

    container.querySelector('#retake-quiz-btn')?.addEventListener('click', () => {
      this.reset();
      this.render(container);
    });

    container.querySelector('#summary-back-video-btn')?.addEventListener('click', () => {
      this.appState.setActiveTab('videos');
    });

    container.querySelector('#view-analytics-btn')?.addEventListener('click', () => {
      this.appState.setActiveTab('analytics');
    });
  }

  bindEvents(container, lesson, quizzes) {
    const q = quizzes[this.currentQuestionIndex];

    // Options selection
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAnswerSubmitted) return;
        const selectedIndex = parseInt(btn.dataset.index, 10);
        this.userAnswers[this.currentQuestionIndex] = {
          questionId: q.id,
          selectedIndex: selectedIndex,
          isCorrect: selectedIndex === q.correctIndex
        };
        this.render(container);
      });
    });

    // Submit Answer
    const submitBtn = container.querySelector('#submit-answer-btn');
    submitBtn?.addEventListener('click', () => {
      if (this.userAnswers[this.currentQuestionIndex]) {
        this.isAnswerSubmitted = true;
        this.render(container);
      }
    });

    // Next Question
    const nextBtn = container.querySelector('#next-question-btn');
    nextBtn?.addEventListener('click', () => {
      if (this.currentQuestionIndex < quizzes.length - 1) {
        this.currentQuestionIndex++;
        this.isAnswerSubmitted = false;
        this.render(container);
      } else {
        this.quizCompleted = true;
        this.render(container);
      }
    });

    // Previous Question
    const prevBtn = container.querySelector('#prev-question-btn');
    prevBtn?.addEventListener('click', () => {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.isAnswerSubmitted = true;
        this.render(container);
      }
    });
  }
}
