function displayHighScores() {
  const highScoresList = document.getElementById("highscores");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.sort((a, b) => b.score - a.score);
  highScoresList.innerHTML = "";

  highScores.forEach((scoreData, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
    highScoresList.appendChild(listItem);
  });
}

displayHighScores();

document.getElementById("clear").addEventListener("click", function () {
  localStorage.removeItem("highScores");

  displayHighScores();
});
