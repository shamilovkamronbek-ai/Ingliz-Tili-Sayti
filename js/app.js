// ============ ENGLISH ACADEMY — ASOSIY LOGIKA ============

const $ = (sel) => document.querySelector(sel);
const app = () => $("#app");

// ============ HOLAT (STATE) ============
const DEFAULT_STATE = {
  lessonsDone: {},     // lessonId -> true
  knownWords: {},      // "word" -> true (o'rganilgan)
  quizResults: [],     // {date, score, total}
  points: 0,           // jami ball
  streak: 0,
  lastStudyDay: null,
  flashcardsSeen: {}   // kartalar soni
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem("englishAcademyState");
    return raw ? Object.assign({}, DEFAULT_STATE, JSON.parse(raw)) : { ...DEFAULT_STATE };
  } catch (e) {
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  localStorage.setItem("englishAcademyState", JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak() {
  const today = todayKey();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.lastStudyDay === today) return;
  state.streak = state.lastStudyDay === yesterday ? (state.streak || 0) + 1 : 1;
  state.lastStudyDay = today;
  saveState();
}

function renderStreak() {
  const badge = $("#streakCount");
  if (badge) badge.textContent = state.streak || 0;
}

// ============ TOAST ============
let toastTimer;
function toast(msg, type = "") {
  const el = $("#toast");
  el.textContent = msg;
  el.className = "toast show " + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.className = "toast";
  }, 2600);
}

// ============ NAVIGATION ============
const VIEWS = ["home", "lessons", "vocabulary", "quiz", "progress"];

function navigate(view) {
  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  render(view);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-link").forEach((btn) => {
  btn.addEventListener("click", () => navigate(btn.dataset.view));
});

// ============ RENDER ============
function render(view) {
  switch (view) {
    case "home": renderHome(); break;
    case "lessons": renderLessons(); break;
    case "vocabulary": renderVocabulary(); break;
    case "quiz": renderQuizHome(); break;
    case "progress": renderProgress(); break;
  }
}

// ---------- BOSH SAHIFA ----------
function renderHome() {
  updateStreak();
  renderStreak();

  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  const wotd = WORD_OF_DAY[Math.floor(Math.random() * WORD_OF_DAY.length)];
  const doneCount = Object.keys(state.lessonsDone).length;
  const totalLessons = LESSONS.length;
  const knownWords = Object.keys(state.knownWords).length;
  const totalWords = Object.values(VOCABULARY).reduce((s, arr) => s + arr.length, 0);

  app().innerHTML = `
    <section class="hero">
      <div>
        <h1>Ingliz tilini o'rganing — <br>oson va qiziqarli! 🇬🇧</h1>
        <p>Grammatika darslari, lug'at, testlar va kundalik mashg'ulotlar. Bugundan boshlang!</p>
        <button class="btn btn-light btn-lg mt-12" onclick="navigate('lessons')">📚 Darslarni boshlash</button>
      </div>
      <div class="hero-emoji">💬</div>
    </section>

    <section class="section">
      <div class="wotd">
        <div class="wotd-emoji">📖</div>
        <div style="flex:1">
          <span style="color:#93c5fd;font-weight:700;letter-spacing:1px">KUNNING SO'ZI</span>
          <div class="wotd-word">${wotd.word}<span class="wotd-ipa">${wotd.ipa}</span></div>
          <div class="wotd-trans">${wotd.uz}</div>
          <div class="wotd-example">"${wotd.example}"</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">⚡ Tezkor statistika</h2>
      <div class="grid grid-3">
        <div class="card stat-card">
          <div class="stat-num">${doneCount}/${totalLessons}</div>
          <div class="stat-label">Darslar yakunlandi</div>
        </div>
        <div class="card stat-card">
          <div class="stat-num">${knownWords}/${totalWords}</div>
          <div class="stat-label">So'zlar o'rganildi</div>
        </div>
        <div class="card stat-card">
          <div class="stat-num">${state.points}</div>
          <div class="stat-label">Jami ball</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">📚 Grammatika darslari</h2>
      <p class="section-sub">${LESSONS.length} ta dars — boshlang'ichdan yuqori darajagacha</p>
      <div class="grid grid-3">
        ${LESSONS.slice(0, 6).map((l) => lessonCard(l)).join("")}
      </div>
      <button class="btn btn-ghost mt-20" onclick="navigate('lessons')">Barcha darslar →</button>
    </section>

    <section class="section">
      <h2 class="section-title">✨ Motivatsiya</h2>
      <div class="card" style="text-align:center;padding:28px">
        <p style="font-size:1.15rem;font-weight:600;font-style:italic">"${quote}"</p>
      </div>
    </section>
  `;
}

function lessonCard(l) {
  const done = state.lessonsDone[l.id];
  return `
    <div class="card" onclick="openLesson(${l.id})">
      <span class="card-icon">${l.icon}</span>
      <h3>${l.title}</h3>
      <p>${l.desc}</p>
      <div class="tag ${l.tagClass}">${l.tag}</div>
      <span class="tag green" style="margin-left:6px">${done ? "✅ Yakunlandi" : "◻️ Boshlash"}</span>
    </div>
  `;
}

// ---------- DARSLAR ----------
function renderLessons() {
  const doneCount = Object.keys(state.lessonsDone).length;
  const total = LESSONS.length;
  const percent = Math.round((doneCount / total) * 100);

  app().innerHTML = `
    <h2 class="section-title" style="margin-top:24px">📚 Darslar</h2>
    <p class="section-sub">Jami ${total} ta dars. Har bir dars oxirida mashqlar bor.</p>
    <div class="card mb-20">
      <div class="progress-label"><span>Umumiy taraqqiyot</span><span>${doneCount}/${total} (${percent}%)</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
    </div>
    <div class="grid grid-3">
      ${LESSONS.map((l) => lessonCard(l)).join("")}
    </div>
  `;
}

function openLesson(id) {
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) return;
  currentLessonId = id;

  let html = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <button onclick="navigate('lessons')">← Darslar</button>
        <span>/</span>
        <span>${lesson.title}</span>
      </div>
      <div class="lesson-title">${lesson.icon} ${lesson.title}</div>
      <div class="lesson-desc">${lesson.desc} · <span class="tag ${lesson.tagClass}">${lesson.level}</span></div>
    </div>
  `;

  lesson.content.forEach((block, i) => {
    if (block.type === "text") {
      html += `<div class="example-box">${block.html}</div>`;
    } else if (block.type === "example") {
      html += `
        <div class="example-box">
          <div class="en">${block.en}</div>
          <div class="uz">🇺🇿 ${block.uz}</div>
          ${block.note ? `<div class="uz" style="margin-top:6px;color:#4f46e5;font-weight:600">💡 ${block.note}</div>` : ""}
        </div>
      `;
    } else if (block.type === "tip") {
      html += `<div class="tip-box">💡 ${block.text}</div>`;
    } else if (block.type === "exercise") {
      html += `
        <div class="exercise-card" id="exercise-${i}">
          <h4>✍️ Mashq: ${block.title}</h4>
          ${block.options.map((opt, oi) => `
            <div class="question-block" data-answer="${opt.answer}" data-choices='${JSON.stringify(opt.choices)}'>
              <div style="font-weight:600;margin-bottom:8px">${opt.text}</div>
              <div class="choices">
                ${opt.choices.map((c, ci) => `
                  <label data-choice="${ci}">
                    <input type="radio" name="q-${i}-${oi}" value="${c}">
                    <span>${c}</span>
                  </label>
                `).join("")}
              </div>
              <div class="feedback"></div>
            </div>
          `).join("")}
          <button class="btn btn-success mt-20" onclick="checkExercise(${i})">✅ Tekshirish</button>
        </div>
      `;
    }
  });

  app().innerHTML = html;

  lesson.content.forEach((block, i) => {
    if (block.type === "exercise") {
      block.options.forEach((opt, oi) => {
        document.querySelectorAll(`input[name="q-${i}-${oi}"]`).forEach((radio) => {
          radio.addEventListener("change", () => {
            const qBlock = radio.closest(".question-block");
            const choiceIndex = parseInt(radio.closest("label").dataset.choice, 10);
            qBlock.querySelectorAll("label").forEach((lab, ci) => {
              lab.classList.toggle("selected", ci === choiceIndex);
            });
          });
        });
      });
    }
  });
}

let currentLessonId = null;

function checkExercise(exIdx) {
  const blocks = document.querySelectorAll(`#exercise-${exIdx} .question-block`);
  let correct = 0;

  blocks.forEach((block) => {
    const answer = block.dataset.answer;
    const feedback = block.querySelector(".feedback");
    const labels = block.querySelectorAll("label");
    const selected = block.querySelector("input:checked");
    const value = selected ? selected.value : null;

    labels.forEach((lab) => {
      const choice = lab.querySelector("span").textContent;
      if (choice === answer) lab.classList.add("correct");
      else if (selected && lab.querySelector("input").value === value) lab.classList.add("wrong");
    });

    if (value === answer) {
      correct++;
      feedback.className = "feedback correct";
      feedback.textContent = "✅ To'g'ri!";
    } else {
      feedback.className = "feedback wrong";
      feedback.textContent = selected ? "❌ Noto'g'ri. To'g'ri javob: " + answer : "👇 Javob tanlang";
    }
  });

  const total = blocks.length;
  const lesson = LESSONS.find((l) => l.id === currentLessonId);

  if (correct === total) {
    if (lesson && !state.lessonsDone[lesson.id]) {
      state.lessonsDone[lesson.id] = true;
      state.points += 10;
      saveState();
      renderStreak();
      toast("🎉 Ajoyib! Dars yakunlandi (+10 ball)", "success");
    } else {
      toast("✅ Hammasi to'g'ri!", "success");
    }
  } else {
    toast(`Natija: ${correct}/${total}. Qayta urinib ko'ring!`, "error");
  }
}

// ---------- LUG'AT ----------
let currentCategory = "greetings";
let flashMode = false;
let flashIndex = 0;
let flashWords = [];

function renderVocabulary() {
  const totalWords = Object.values(VOCABULARY).reduce((s, arr) => s + arr.length, 0);
  const known = Object.keys(state.knownWords).length;

  let html = `
    <h2 class="section-title" style="margin-top:24px">📖 Lug'at</h2>
    <p class="section-sub">${totalWords} ta so'z · ${known} tasi o'rganildi</p>
    <div class="grid grid-4 mb-20">
      ${VOCAB_CATEGORIES.map((cat) => `
        <div class="card ${cat.id === currentCategory ? "cat-active" : ""}" onclick="selectCategory('${cat.id}')" style="${cat.id === currentCategory ? "border-color:var(--primary);box-shadow:var(--shadow-lg)" : ""}">
          <span class="card-icon">${cat.icon}</span>
          <h3>${cat.name}</h3>
        </div>
      `).join("")}
    </div>
  `;

  html += `
    <div class="card mb-20">
      <div class="section-title" style="font-size:1.15rem">${VOCAB_CATEGORIES.find((c) => c.id === currentCategory).icon} ${VOCAB_CATEGORIES.find((c) => c.id === currentCategory).name}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">
        <button class="btn btn-ghost" onclick="startFlash()">🃏 Kartalar bilan o'rganish</button>
        <button class="btn btn-ghost" onclick="toggleAllKnown()">✔️ Hammasini o'rganildi deb belgilash</button>
      </div>
    </div>
  `;

  html += `<div class="vocab-list">`;
  const words = VOCABULARY[currentCategory];
  words.forEach((w) => {
    const status = state.knownWords[w.en] ? "known" : "unknown";
    html += `
      <div class="vocab-item" onclick="toggleWord('${w.en.replace(/'/g, "\\'")}')">
        <div>
          <div class="vocab-word">${w.en} <span class="vocab-ipa">${w.ipa}</span></div>
          <div class="vocab-trans">🇺🇿 ${w.uz}</div>
        </div>
        <div class="vocab-right">
          <span class="status-dot ${status}"></span>
          <span style="font-size:0.8rem;color:var(--muted)">${status === "known" ? "O'rganildi" : "Belgilash"}</span>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  app().innerHTML = html;
}

function selectCategory(catId) {
  currentCategory = catId;
  renderVocabulary();
}

function toggleWord(word) {
  if (state.knownWords[word]) {
    delete state.knownWords[word];
    toast("So'z ro'yxatdan olib tashlandi");
  } else {
    state.knownWords[word] = true;
    state.points += 1;
    toast(`✅ "${word}" o'rganildi (+1 ball)`, "success");
  }
  saveState();
  renderStreak();
  renderVocabulary();
}

function toggleAllKnown() {
  VOCABULARY[currentCategory].forEach((w) => {
    state.knownWords[w.en] = true;
    state.points += 1;
  });
  saveState();
  renderStreak();
  toast("Barcha so'zlar belgilandi 🎉", "success");
  renderVocabulary();
}

// ---------- FLASHCARDS ----------
function startFlash() {
  flashWords = [...VOCABULARY[currentCategory]];
  flashIndex = 0;
  flashMode = true;
  renderFlash();
}

function renderFlash() {
  if (flashWords.length === 0) {
    renderVocabulary();
    return;
  }
  if (flashIndex >= flashWords.length) {
    app().innerHTML = `
      <div class="center" style="margin-top:60px">
        <span class="big">🎉</span>
        <h2 class="section-title" style="justify-content:center">Barakalla! Barcha kartalar yakunlandi</h2>
        <p class="section-sub">${flashWords.length} ta so'z ko'rib chiqildi</p>
        <button class="btn btn-primary" onclick="renderVocabulary()">← Lug'atga qaytish</button>
      </div>
    `;
    return;
  }

  const word = flashWords[flashIndex];
  const known = state.knownWords[word.en];

  app().innerHTML = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <button onclick="renderVocabulary()">← Lug'at</button>
        <span>/</span>
        <span>Kartalar</span>
      </div>
      <div class="lesson-title">🃏 Flashkartalar</div>
      <div class="lesson-desc">Kartaga bosib javobni ko'ring · Karta ${flashIndex + 1}/${flashWords.length}</div>
    </div>
    <div class="progress-track" style="max-width:560px;margin:0 auto 20px">
      <div class="progress-fill" style="width:${(flashIndex / flashWords.length) * 100}%"></div>
    </div>
    <div class="flashcard" id="flashcard" onclick="flipCard()">
      <div id="fc-front">
        <div class="fc-word">${word.en}</div>
        <div class="fc-hint">${word.ipa}</div>
      </div>
      <div id="fc-back" style="display:none">
        <div class="fc-translation">🇺🇿 ${word.uz}</div>
      </div>
    </div>
    <div class="fc-controls">
      <button class="btn btn-ghost" onclick="prevFlash()">⬅️ Oldingi</button>
      <button class="btn btn-success" onclick="knowFlash()">👍 Bilaman</button>
      <button class="btn" onclick="nextFlash()">Keyingi ➡️</button>
    </div>
  `;
}

function flipCard() {
  const front = $("#fc-front");
  const back = $("#fc-back");
  const isHidden = back.style.display === "none";
  back.style.display = isHidden ? "block" : "none";
  front.style.display = isHidden ? "none" : "block";
}

function knowFlash() {
  const word = flashWords[flashIndex];
  state.knownWords[word.en] = true;
  saveState();
  renderStreak();
  flashIndex++;
  renderFlash();
}

function nextFlash() {
  flashIndex++;
  renderFlash();
}

function prevFlash() {
  if (flashIndex > 0) flashIndex--;
  renderFlash();
}

// ---------- TEST (QUIZ) ----------
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

function renderQuizHome() {
  app().innerHTML = `
    <h2 class="section-title" style="margin-top:24px">📝 Testlar</h2>
    <p class="section-sub">Bilimingizni sinab ko'ring. Har to'g'ri javobga 2 ball beriladi.</p>
    <div class="grid grid-3">
      <div class="card" onclick="startQuiz('grammar')">
        <span class="card-icon">🧠</span>
        <h3>Grammatika testi</h3>
        <p>12 ta savol — barcha mavzulardan aralash</p>
        <div class="tag blue">12 savol</div>
      </div>
      <div class="card" onclick="startQuiz('vocab')">
        <span class="card-icon">🔤</span>
        <h3>Lug'at testi</h3>
        <p>So'z boyligingizni tekshiring</p>
        <div class="tag green">10 savol</div>
      </div>
      <div class="card" onclick="startQuiz('random')">
        <span class="card-icon">🎲</span>
        <h3>Random test</h3>
        <p>8 ta tasodifiy savol</p>
        <div class="tag orange">8 savol</div>
      </div>
    </div>
    <div class="section">
      <h2 class="section-title mt-20">📊 Oxirgi natijalar</h2>
      <div class="card">
        ${state.quizResults.length === 0
          ? '<p class="section-sub" style="margin:0">Hali test topshirmagansiz. Yuqoridan birini tanlang!</p>'
          : state.quizResults.slice().reverse().slice(0, 6).map((r) => `
              <div class="vocab-item" style="cursor:default;box-shadow:none">
                <div class="vocab-word">${r.date}</div>
                <div><span class="tag ${r.score / r.total >= 0.6 ? "green" : "red"}">${r.score}/${r.total} (${Math.round((r.score / r.total) * 100)}%)</span></div>
              </div>
            `).join("")}
      </div>
    </div>
  `;
}

function startQuiz(type) {
  let qs = [];
  if (type === "grammar") {
    qs = LESSONS.slice(0, 5).flatMap((l) =>
      l.content.filter((c) => c.type === "exercise").flatMap((e) =>
        e.options.map((o) => ({ text: o.text, answer: o.answer, choices: o.choices }))
      )
    ).concat(EXTRA_QUIZ).slice(0, 12);
  } else if (type === "vocab") {
    const pool = Object.values(VOCABULARY).flat();
    const picked = [];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    for (const w of shuffled.slice(0, 10)) {
      const wrong = pool.filter((x) => x.uz !== w.uz).sort(() => Math.random() - 0.5).slice(0, 3);
      const choices = [w.uz, ...wrong.map((x) => x.uz)].sort(() => Math.random() - 0.5);
      qs.push({ text: `"${w.en}" nimani anglatadi?`, answer: w.uz, choices });
    }
  } else {
    const pool = LESSONS.flatMap((l) =>
      l.content.filter((c) => c.type === "exercise").flatMap((e) => e.options)
    ).concat(EXTRA_QUIZ);
    qs = [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
  }

  quizQuestions = qs;
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz() {
  if (quizIndex >= quizQuestions.length) {
    renderQuizResult();
    return;
  }

  const q = quizQuestions[quizIndex];
  app().innerHTML = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <button onclick="navigate('quiz')">← Testlar</button>
        <span>/</span>
        <span>Test</span>
      </div>
      <div class="quiz-header">
        <div class="lesson-title">${quizIndex + 1}/${quizQuestions.length}</div>
        <div class="score-chip">Ball: ${quizScore}</div>
      </div>
    </div>
    <div class="quiz-progress">
      <div class="progress-fill" style="width:${(quizIndex / quizQuestions.length) * 100}%"></div>
    </div>
    <div class="exercise-card" style="max-width:720px;margin:0 auto">
      <h4>${q.text}</h4>
      <div class="choices">
        ${q.choices.map((c, i) => `
          <label data-choice="${i}" style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:2px solid #eef0f5;border-radius:10px;margin-bottom:6px;cursor:pointer">
            <input type="radio" name="quiz-answer" value="${c}" style="margin-top:0">
            <span>${c}</span>
          </label>
        `).join("")}
      </div>
      <button class="btn btn-success btn-block mt-20" onclick="submitQuizAnswer()">Keyingisi ➡️</button>
    </div>
  `;

  document.querySelectorAll('input[name="quiz-answer"]').forEach((r) => {
    r.addEventListener("change", () => {
      document.querySelectorAll('.choices label').forEach((lab, i) => {
        lab.style.borderColor = i === parseInt(r.closest("label").dataset.choice, 10) ? "var(--primary)" : "#eef0f5";
      });
    });
  });
}

function submitQuizAnswer() {
  const selected = document.querySelector('input[name="quiz-answer"]:checked');
  if (!selected) {
    toast("Javob tanlang!", "error");
    return;
  }

  const q = quizQuestions[quizIndex];
  const labels = document.querySelectorAll(".choices label");
  const isCorrect = selected.value === q.answer;

  labels.forEach((lab) => {
    const value = lab.querySelector("span").textContent;
    if (value === q.answer) lab.style.borderColor = "var(--success)";
    else if (lab.querySelector("input").checked) lab.style.borderColor = "var(--danger)";
  });

  if (isCorrect) {
    quizScore += 2;
    toast("✅ To'g'ri! +2 ball", "success");
  } else {
    toast(`❌ To'g'ri javob: ${q.answer}`);
  }

  setTimeout(() => {
    quizIndex++;
    renderQuiz();
  }, 900);
}

function renderQuizResult() {
  const total = quizQuestions.length * 2;
  const percent = Math.round((quizScore / total) * 100);
  const grade = percent >= 80 ? "A'lo! 🏆" : percent >= 60 ? "Yaxshi! 👍" : percent >= 40 ? "O'rtacha 💪" : "Mashq qilish kerak 📚";
  const color = percent >= 80 ? "#16a34a" : percent >= 60 ? "#0ea5e9" : percent >= 40 ? "#f59e0b" : "#dc2626";

  state.quizResults.push({ date: new Date().toLocaleDateString("uz-UZ"), score: quizScore, total });
  state.points += quizScore;
  saveState();
  renderStreak();

  app().innerHTML = `
    <div class="center" style="margin-top:50px">
      <h2 class="section-title" style="justify-content:center">Test yakunlandi!</h2>
      <div class="result-circle" style="background:${color}">
        <span class="percent">${percent}%</span>
        <span>${quizScore}/${total}</span>
      </div>
      <p style="font-size:1.3rem;font-weight:700;margin-bottom:6px">${grade}</p>
      <p class="section-sub">+${quizScore} ball qo'shildi</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-ghost" onclick="navigate('quiz')">↩️ Qaytish</button>
        <button class="btn" onclick="startQuiz('${quizQuestions[0] && quizQuestions[0].text.includes("nimani") ? "vocab" : "grammar"}')">🔁 Qayta urinish</button>
      </div>
    </div>
  `;
}

// ---------- NATIJALAR ----------
function renderProgress() {
  updateStreak();
  renderStreak();

  const doneCount = Object.keys(state.lessonsDone).length;
  const knownCount = Object.keys(state.knownWords).length;
  const totalWords = Object.values(VOCABULARY).reduce((s, arr) => s + arr.length, 0);
  const quizCount = state.quizResults.length;
  const lessonPercent = Math.round((doneCount / LESSONS.length) * 100);
  const wordPercent = Math.round((knownCount / totalWords) * 100);

  let allWords = [];
  Object.values(VOCABULARY).forEach((arr) => arr.forEach((w) => allWords.push(w)));
  const notLearned = allWords.filter((w) => !state.knownWords[w.en]);

  app().innerHTML = `
    <h2 class="section-title" style="margin-top:24px">📊 Mening natijalarim</h2>
    <p class="section-sub">O'qish zanjiri: <b>${state.streak} kun</b> 🔥</p>

    <div class="grid grid-4 mb-20">
      <div class="card stat-card">
        <div class="stat-num">${doneCount}/${LESSONS.length}</div>
        <div class="stat-label">Darslar</div>
        <div class="progress-track" style="margin-top:10px"><div class="progress-fill" style="width:${lessonPercent}%"></div></div>
      </div>
      <div class="card stat-card">
        <div class="stat-num">${knownCount}/${totalWords}</div>
        <div class="stat-label">So'zlar</div>
        <div class="progress-track" style="margin-top:10px"><div class="progress-fill" style="width:${wordPercent}%"></div></div>
      </div>
      <div class="card stat-card">
        <div class="stat-num">${quizCount}</div>
        <div class="stat-label">Testlar soni</div>
      </div>
      <div class="card stat-card">
        <div class="stat-num">${state.points}</div>
        <div class="stat-label">Jami ball</div>
      </div>
    </div>

    <div class="grid grid-2">
      <div class="section">
        <h2 class="section-title">📝 Test tarixi</h2>
        <div class="card">
          ${state.quizResults.length === 0
            ? '<p class="section-sub" style="margin:0">Hali test ishlamagansiz.</p>'
            : state.quizResults.slice().reverse().map((r) => `
                <div class="vocab-item" style="cursor:default">
                  <div class="vocab-word">${r.date}</div>
                  <div class="vocab-right">
                    <span class="vocab-trans" style="color:var(--primary);font-weight:700">${r.score}/${r.total} ball</span>
                    <span class="tag ${r.score / r.total >= 0.6 ? "green" : "red"}">${Math.round((r.score / r.total) * 100)}%</span>
                  </div>
                </div>
              `).join("")}
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">📚 O'rganilmagan so'zlar</h2>
        <div class="card">
          ${notLearned.length === 0
            ? "<p class=\"section-sub\" style=\"margin:0\">Hammasini o'rgandingiz! Ajoyib! 🎉</p>"
            : notLearned.slice(0, 8).map((w) => `
                <div class="vocab-item" style="cursor:default">
                  <div class="vocab-word">${w.en}</div>
                  <div class="vocab-trans">${w.uz}</div>
                </div>
              `).join("") + (notLearned.length > 8 ? `<p class="section-sub mt-12">Va yana ${notLearned.length - 8} ta...</p>` : "")}
        </div>
      </div>
    </div>

    <div class="center" style="margin-top:10px">
      <button class="btn btn-ghost" onclick="resetProgress()">🔄 Barcha taraqqiyotni o'chirish</button>
    </div>
  `;
}

function resetProgress() {
  if (!confirm("Haqiqatan ham barcha taraqqiyotni o'chirmoqchimisiz?")) return;
  localStorage.removeItem("englishAcademyState");
  state = { ...DEFAULT_STATE };
  saveState();
  renderStreak();
  toast("Taraqqiyot o'chirildi", "success");
  navigate("progress");
}

// ============ BOSHLANG'ICH ============
document.addEventListener("DOMContentLoaded", () => {
  renderStreak();
  navigate("home");
});
