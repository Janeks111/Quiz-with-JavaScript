// This function is responsible for displaying the high scores on a webpage.
function displayHighScores() {
  // Get a reference to the HTML element with the id "highscores".
  const highScoresList = document.getElementById("highscores");
  // Retrieve high scores from local storage, or initialize an empty array if there are no high scores.
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort the high scores in descending order based on the 'score' property.
  highScores.sort((a, b) => b.score - a.score);
  // Clear the existing content of the highScoresList element.
  highScoresList.innerHTML = "";

  // Iterate through the highScores array and create a list item for each high score.
  highScores.forEach((scoreData, index) => {
    const listItem = document.createElement("li");
    // Set the text content of the list item to display the player's initials and score.
    listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
    // Append the list item to the highScoresList element.
    highScoresList.appendChild(listItem);
  });
}

// Call the displayHighScores function to initially display high scores when the page loads.
displayHighScores();

// Add a click event listener to a button with the id "clear".
document.getElementById("clear").addEventListener("click", function () {
  // Remove the "highScores" data from local storage, effectively clearing the high scores.
  localStorage.removeItem("highScores");

  // Call the displayHighScores function again to update the displayed high scores, which will now be empty.
  displayHighScores();
});
