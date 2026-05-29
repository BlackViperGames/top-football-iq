// =======================
// TOP FOOTBALL IQ 2.3
// =======================

let xp = 0;
let currentQuestion = 0;

const beginnerQuestions = [
  {
    question: "Wie viele Spieler stehen pro Mannschaft bei Spielbeginn auf dem Feld?",
    answers: ["9 Spieler", "10 Spieler", "11 Spieler", "12 Spieler"],
    correct: 2
  },
  {
    question: "Wie lange dauert ein reguläres Fußballspiel?",
    answers: ["60 Minuten", "70 Minuten", "80 Minuten", "90 Minuten"],
    correct: 3
  },
  {
    question: "Welche Karte bedeutet Platzverweis?",
    answers: ["Gelb", "Blau", "Grün", "Rot"],
    correct: 3
  },
  {
    question: "Wie viele Punkte gibt es für einen Sieg?",
    answers: ["1", "2", "3", "4"],
    correct: 2
  },
  {
    question: "Wie nennt man einen Strafstoß?",
    answers: ["Ecke", "Abwurf", "Elfmeter", "Freistoß"],
    correct: 2
  }
];

function goHome() {
  location.reload();
}

function openWorldMap() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="world-map">

      <button class="back-btn" onclick="goHome()">
        ← Startseite
      </button>

      <h1 class="map-title">🌍 ROAD TO LEGEND</h1>

      <div class="profile-card">
        <h2>⚽ Anfänger</h2>
        <p>Grundwissen Fußball</p>
        <br>
        <button class="play-button" onclick="startBeginnerLevel()">
          LEVEL STARTEN
        </button>
      </div>

      <br>

      <div class="profile-card">
        <h2>🔒 Amateur</h2>
        <p>Noch nicht freigeschaltet</p>
      </div>

      <br>

      <div class="profile-card">
        <h2>🔒 Profi</h2>
        <p>Noch nicht freigeschaltet</p>
      </div>

    </div>
  `;
}

function startBeginnerLevel() {
  currentQuestion = 0;
  xp = 0;
  showQuestion();
}

function showQuestion() {

  const q = beginnerQuestions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / beginnerQuestions.length) * 100;

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="world-map">

      <button class="back-btn" onclick="openWorldMap()">
        ← Weltkarte
      </button>

      <h1 class="map-title">
        Frage ${currentQuestion + 1} / ${beginnerQuestions.length}
      </h1>

      <div class="progress-bar">
        <div
          class="progress-fill"
          style="width:${progress}%">
        </div>
      </div>

      <div class="profile-card">

        <div class="quiz-question">
          ${q.question}
        </div>

        ${q.answers.map((answer, index) => `
          <button
            class="answer-card"
            onclick="selectAnswer(${index})">
            ${answer}
          </button>
        `).join("")}

      </div>

    </div>
  `;
}

function selectAnswer(answerIndex) {

  const question = beginnerQuestions[currentQuestion];

  if (answerIndex === question.correct) {
    xp += 10;
  }

  currentQuestion++;

  if (currentQuestion >= beginnerQuestions.length) {
    showResults();
    return;
  }

  showQuestion();
}

function showResults() {

  let stars = "⭐";

  if (xp >= 40) {
    stars = "⭐⭐⭐";
  } else if (xp >= 20) {
    stars = "⭐⭐";
  }

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="world-map">

      <h1 class="map-title">
        🏆 LEVEL GESCHAFFT
      </h1>

      <div class="profile-card">

        <h2>${stars}</h2>

        <br>

        <h3>Erhaltene XP</h3>

        <br>

        <h1>${xp}</h1>

        <br>

        <p>
          Du hast das Anfänger-Level abgeschlossen.
        </p>

      </div>

      <br>

      <button
        class="play-button"
        onclick="openWorldMap()">

        ZUR WELTKARTE

      </button>

    </div>
  `;
}
