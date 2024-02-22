const predictions = [
  "Une grande opportunité se présentera bientôt.",
  "Peut-être bien que oui, peut-être bien que non.",
  "Des changements positifs sont à venir dans votre vie.",
  "Et sinon, ça va vous ?",
  "Faites attention aux signes autour de vous.",
  "La chance sera de votre côté aujourd'hui.",
  "Alors là, même moi j'en ai strictement aucune idée 😲",
  "Prenez le temps de vous relaxer et de méditer.",
];

function getRandomPrediction() {
  const predictionElement = document.getElementById("prediction");
  const randomIndex = Math.floor(Math.random() * predictions.length);
  predictionElement.innerText = predictions[randomIndex];
}

function resetPrediction() {
  const predictionElement = document.getElementById("prediction");
  predictionElement.innerText = "";
}
