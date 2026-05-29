function openWorldMap() {

  const app = document.getElementById("app");

  app.innerHTML = `

  <div class="world-map">

    <h1 class="map-title">
      🌍 ROAD TO LEGEND
    </h1>

    <div class="level-path">

      <div class="level-card level-open">

        <h3>⚽ Anfänger</h3>

        <p>
          Fußball-Grundwissen
        </p>

        <button
          class="level-btn"
          onclick="startBeginnerLevel()">
          LEVEL STARTEN
        </button>

      </div>

      <div class="path-arrow">⬇</div>

      <div class="level-card level-locked">

        <h3>🏟 Amateur</h3>

        <p>
          Vereine & Nationalteams
        </p>

        <button class="level-btn locked-btn">
          GESPERRT
        </button>

      </div>

      <div class="path-arrow">⬇</div>

      <div class="level-card level-locked">

        <h3>🏆 Profi</h3>

        <p>
          Champions League
        </p>

        <button class="level-btn locked-btn">
          GESPERRT
        </button>

      </div>

      <div class="path-arrow">⬇</div>

      <div class="level-card level-locked">

        <h3>👑 Experte</h3>

        <p>
          Historische Fußballmomente
        </p>

        <button class="level-btn locked-btn">
          GESPERRT
        </button>

      </div>

      <div class="path-arrow">⬇</div>

      <div class="level-card level-locked">

        <h3>🌟 Legende</h3>

        <p>
          Nur für wahre Fußballgenies
        </p>

        <button class="level-btn locked-btn">
          GESPERRT
        </button>

      </div>

    </div>

    <button
      class="play-button"
      style="margin-top:30px"
      onclick="goHome()">

      ← ZURÜCK

    </button>

  </div>

  `;
}

function goHome() {
  location.reload();
}

function startBeginnerLevel() {

  const app = document.getElementById("app");

  app.innerHTML = `

  <div class="world-map">

    <h1 class="map-title">
      ⚽ ANFÄNGER
    </h1>

    <div class="level-card level-open">

      <h3>
        Level 1
      </h3>

      <p>
        Fußball-Grundwissen
      </p>

      <p>
        Fragen: 10
      </p>

      <p>
        Belohnung: 100 XP
      </p>

      <p>
        Schwierigkeit: ⭐
      </p>

      <button
        class="level-btn"
        onclick="startQuiz()">

        QUIZ STARTEN

      </button>

    </div>

    <button
      class="play-button"
      style="margin-top:30px"
      onclick="openWorldMap()">

      ← ZURÜCK

    </button>

  </div>

  `;
}

function startQuiz() {

  const app = document.getElementById("app");

  app.innerHTML = `

  <div class="world-map">

    <h1 class="map-title">
      Frage 1 / 10
    </h1>

    <div class="level-card level-open">

      <h3>
        Wie viele Spieler stehen pro Mannschaft bei Spielbeginn auf dem Feld?
      </h3>

      <br>

      <button class="level-btn" onclick="correctAnswer()">
        A) 11
      </button>

      <br><br>

      <button class="level-btn" onclick="wrongAnswer()">
        B) 10
      </button>

      <br><br>

      <button class="level-btn" onclick="wrongAnswer()">
        C) 12
      </button>

      <br><br>

      <button class="level-btn" onclick="wrongAnswer()">
        D) 9
      </button>

    </div>

  </div>

  `;
}

function correctAnswer() {
  alert("⚽ Richtig!");
}

function wrongAnswer() {
  alert("❌ Falsch!");
}
