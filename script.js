const teamA_name = document.getElementById('teamA_name');
const teamA_score = document.getElementById('teamA_score');

const teamB_name = document.getElementById('teamB_name');
const teamB_score = document.getElementById('teamB_score');

const decrementA = document.getElementById('decrementA');
const incrementA = document.getElementById('incrementA');
const edit_nameA = document.getElementById('edit_nameA');
const edit_scoreA = document.getElementById('edit_scoreA');

const decrementB = document.getElementById('decrementB');
const incrementB = document.getElementById('incrementB');
const edit_nameB = document.getElementById('edit_nameB');
const edit_scoreB = document.getElementById('edit_scoreB');

let scoreA = 0;
let scoreB = 0;

incrementA.addEventListener('click', () => {
   scoreA++;
   teamA_score.textContent = scoreA;
});

decrementA.addEventListener('click', () => {
   if (scoreA > 0) {
      scoreA--;
      teamA_score.textContent = scoreA;
   }
});

edit_nameA.addEventListener('click', () => {
   let teamAname = prompt('Enter Team A name');
   if (!(teamAname === null || teamAname === "")) {
      teamA_name.textContent = teamAname;
   }
});

edit_scoreA.addEventListener('click', () => {
   let inputScore = prompt('Enter a Team A score');
   let parsedScore = parseInt(inputScore);

   if (!(inputScore === null || inputScore === "")) {
      if (isNaN(parsedScore)) {
         alert('Please enter a valid integer');
         scoreA = 0;
      } else {
         scoreA = parsedScore;
      }
   }

   teamA_score.textContent = scoreA;

});


incrementB.addEventListener('click', () => {
   scoreB++;
   teamB_score.textContent = scoreB;
});

decrementB.addEventListener('click', () => {
   if (scoreB > 0) {
      scoreB--;
      teamB_score.textContent = scoreB;
   }
});

edit_nameB.addEventListener('click', () => {
   let teamBname = prompt('Enter Team B name');
   if (!(teamBname === null || teamBname === "")) {
      teamB_name.textContent = teamBname;
   }
});

edit_scoreB.addEventListener('click', () => {
   let inputScore = prompt('Enter a Team B score');
   let parsedScore = parseInt(inputScore);

   if (!(inputScore === null || inputScore === "")) {
      if (isNaN(parsedScore)) {
         alert('Please enter a valid integer');
         scoreB = 0;
      } else {
         scoreB = parsedScore;
      }
   }

   teamB_score.textContent = scoreB;

});