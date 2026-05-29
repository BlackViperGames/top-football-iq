// =======================
// TOP FOOTBALL IQ 2.2
// =======================

let xp = 0;
let currentQuestion = 0;

const beginnerQuestions = [

{
question:"Wie viele Spieler stehen pro Mannschaft bei Spielbeginn auf dem Feld?",
answers:[
"9 Spieler",
"10 Spieler",
"11 Spieler",
"12 Spieler"
],
correct:2
},

{
question:"Welcher Körperteil darf ein Feldspieler normalerweise nicht benutzen?",
answers:[
"Kopf",
"Brust",
"Hand",
"Fuß"
],
correct:2
},

{
question:"Wie lange dauert ein Fußballspiel regulär?",
answers:[
60 Minuten",
"70 Minuten",
"80 Minuten",
"90 Minuten"
],
correct:3
},

{
question:"Wie viele Halbzeiten gibt es?",
answers:[
1",
"2",
"3",
"4"
],
correct:1
},

{
question:"Welche Karte bedeutet Platzverweis?",
answers:[
Grün",
"Blau",
"Gelb",
"Rot"
],
correct:3
},

{
question:"Wie viele Punkte gibt es für einen Sieg?",
answers:[
1",
"2",
"3",
"4"
],
correct:2
},

{
question:"Wie heißt der Spieler im Tor?",
answers:[
Verteidiger",
"Torwart",
"Stürmer",
"Kapitän"
],
correct:1
},

{
question:"Was passiert beim Abseits?",
answers:[
Einwurf",
"Freistoß",
"Schiedsrichterball",
"Elfmeter"
],
correct:1
},

{
question:"Wie groß ist ein Team auf dem Feld?",
answers:[
8",
"9",
"10",
"11"
],
correct:3
},

{
question:"Wie nennt man einen Strafstoß?",
answers:[
Freistoß",
"Abwurf",
"Elfmeter",
"Ecke"
],
correct:2
}

];

function openWorldMap(){

const app = document.getElementById("app");

app.innerHTML = `

<div class="world-map">

<button
class="back-btn"
onclick="goHome()">

← Startseite

</button>

<h1 class="map-title">
🌍 ROAD TO LEGEND
</h1>

<div class="profile-card">

<h3>Karrierepfad</h3>

<br>

<p>
Schließe Level ab und werde zur Fußball-Legende.
</p>

</div>

<br>

<div class="profile-card">

<h3>⚽ Anfänger</h3>

<p>
Grundwissen Fußball
</p>

<br>

<button
class="play-button"
onclick="startBeginnerLevel()">

LEVEL STARTEN

</button>

</div>

<br>

<div class="profile-card">

<h3>🔒 Amateur</h3>

<p>
Noch nicht freigeschaltet
</p>

</div>

<br>

<div class="profile-card">

<h3>🔒 Profi</h3>

<p>
Noch nicht freigeschaltet
</p>

</div>

<br>

<div class="profile-card">

<h3>🔒 Experte</h3>

<p>
Noch nicht freigeschaltet
</p>

</div>

<br>

<div class="profile-card">

<h3>🔒 Legende</h3>

<p>
Noch nicht freigeschaltet
</p>

</div>

</div>

`;
}

function goHome(){
location.reload();
}

function startBeginnerLevel(){

currentQuestion = 0;
xp = 0;

showQuestion();
}

function showQuestion(){

const q = beginnerQuestions[currentQuestion];

const progress =
((currentQuestion + 1)
/
beginnerQuestions.length)
*100;

const app =
document.getElementById("app");

app.innerHTML = `

<div class="world-map">

<button
class="back-btn"
onclick="openWorldMap()">

← Weltkarte

</button>

<h1 class="map-title">

Frage
${currentQuestion + 1}
/
${beginnerQuestions.length}

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

${q.answers.map((answer,index)=>`

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

function selectAnswer(answerIndex){

const question =
beginnerQuestions[currentQuestion];

if(answerIndex === question.correct){

xp += 10;

}

currentQuestion++;

if(
currentQuestion
>=
beginnerQuestions.length
){

showResults();

return;
}

showQuestion();
}

function showResults(){

const stars =
xp >= 90
? "⭐⭐⭐"
:
xp >= 60
? "⭐⭐"
:
"⭐";

const app =
document.getElementById("app");

app.innerHTML = `

<div class="world-map">

<h1 class="map-title">

🏆 LEVEL GESCHAFFT

</h1>

<div class="profile-card">

<h2>

${stars}

</h2>

<br>

<h3>

Erhaltene XP

</h3>

<br>

<h1>

${xp}

</h1>

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
