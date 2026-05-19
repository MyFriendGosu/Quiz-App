let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// ⏱ load timer from settings
const savedTimer = localStorage.getItem("quizTimer");
if (savedTimer) timeLeft = parseInt(savedTimer);

// 🔊 SOUND EFFECTS
const correctSound = new Audio('/sounds/correct.mp3');
const wrongSound = new Audio('/sounds/wrong.mp3');

// DOM
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const questionCountEl = document.getElementById("question-count");
const progressBar = document.getElementById("progress-bar");

// MODAL DOM
const feedbackModal = document.getElementById("feedback-modal");
const feedbackIcon = document.getElementById("feedback-status-icon");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackMessage = document.getElementById("feedback-message");
const modalNextBtn = document.getElementById("modal-next-btn");

// decode HTML (OpenTDB fix)
function decodeHTML(text) {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

// FETCH QUESTIONS
async function loadQuestions() {
  const res = await fetch("/api/questions");
  const data = await res.json();
  questions = data;
  showQuestion();
}

// SHOW QUESTION
function showQuestion() {
  resetTimer();
  const q = questions[currentIndex];

  questionEl.innerHTML = decodeHTML(q.question);
  answersEl.innerHTML = "";

  const answers = [...q.incorrect_answers, q.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  questionCountEl.innerText = `Question ${currentIndex + 1} / ${questions.length}`;

  answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "answer-btn w-full text-left p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all font-medium border-2 border-transparent";
    btn.innerText = decodeHTML(ans);
    btn.onclick = () => handleAnswer(btn, q.correct_answer);
    answersEl.appendChild(btn);
  });

  startTimer(q.correct_answer);
}

// 🧠 HANDLE ANSWER CLICK
function handleAnswer(selectedBtn, correctAnswer) {
  clearInterval(timer);

  const selected = decodeHTML(selectedBtn.innerText);
  const correct = decodeHTML(correctAnswer);
  const isCorrect = selected === correct;

  // Visual feedback on the buttons (Optional, keeps it extra clear)
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    selectedBtn.classList.add("bg-green-500", "text-white", "border-green-600");
    correctSound.play();
    score++;
    showFeedback(true, correct);
  } else {
    selectedBtn.classList.add("bg-red-500", "text-white", "border-red-600");
    wrongSound.play();
    showFeedback(false, correct);
  }
}

// 📢 SHOW FEEDBACK MODAL
function showFeedback(isCorrect, correctAnswer) {
  if (isCorrect) {
    feedbackIcon.innerHTML = "✅";
    feedbackIcon.className = "mx-auto flex items-center justify-center h-20 w-20 rounded-full mb-4 bg-green-100 text-4xl";
    feedbackTitle.innerText = "Correct!";
    feedbackTitle.className = "text-2xl font-bold mb-2 text-green-600";
    feedbackMessage.innerText = "Nicely done! You got it right.";
  } else {
    feedbackIcon.innerHTML = "❌";
    feedbackIcon.className = "mx-auto flex items-center justify-center h-20 w-20 rounded-full mb-4 bg-red-100 text-4xl";
    feedbackTitle.innerText = "Incorrect";
    feedbackTitle.className = "text-2xl font-bold mb-2 text-red-600";
    feedbackMessage.innerHTML = `The correct answer was: <br><span class="font-bold text-gray-800">${correctAnswer}</span>`;
  }

  feedbackModal.classList.remove("hidden");
}

// ⏭ MODAL "CONTINUE" CLICK
modalNextBtn.onclick = () => {
  feedbackModal.classList.add("hidden");
  nextQuestion();
};

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

// ⏱ TIMER
function startTimer(correctAnswer) {
  const initialTime = parseInt(localStorage.getItem("quizTimer")) || 15;
  timeLeft = initialTime;
  timerEl.innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    // Progress Bar Update
    const progressPercent = (timeLeft / initialTime) * 100;
    if (progressBar) progressBar.style.width = `${progressPercent}%`;

    if (timeLeft <= 5) {
      timerEl.classList.add("text-red-600");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      wrongSound.play();
      showFeedback(false, decodeHTML(correctAnswer));
    }
  }, 1000);
}

// 🔄 RESET TIMER STYLE
function resetTimer() {
  clearInterval(timer);
  timerEl.classList.remove("text-red-600");
  if (progressBar) progressBar.style.width = "100%";
}

// 🏁 FINISH QUIZ
function finishQuiz() {
  localStorage.setItem("lastScore", score);
  let best = localStorage.getItem("bestScore") || 0;
  if (score > best) localStorage.setItem("bestScore", score);

  const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
  attempts.push({
    score,
    total: questions.length,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
  window.location.href = `/result?score=${score}&total=${questions.length}`;
}

loadQuestions();