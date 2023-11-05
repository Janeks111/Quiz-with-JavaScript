const questions = [
  {
    question:
      "What is the difference between `null` and `undefined` in JavaScript?",
    choices: [
      "A) `null` represents an uninitialized variable, while `undefined` represents an absent variable.",
      "B) `null` is a value that indicates the absence of a value, while `undefined` is an empty string.",
      "C) `null` and `undefined` are interchangeable and can be used in the same way.",
      "D) `null` is a primitive data type, while `undefined` is an object.",
    ],
    correctAnswer:
      "A) `null` represents an uninitialized variable, while `undefined` represents an absent variable.",
  },
  {
    question: "What is a closure in JavaScript?",

    choices: [
      "A) A closure is a built-in function in JavaScript that allows asynchronous operations.",
      "B) A closure is a way to define private methods and variables in JavaScript.",
      "C) A closure is a data structure that stores multiple values in a single variable.",
      "D) A closure is a function that has access to variables from its outer scope, even after that outer scope has finished executing.",
    ],
    correctAnswer:
      "D) A closure is a function that has access to variables from its outer scope, even after that outer scope has finished executing.",
  },
  {
    question: "What is the Event Loop in JavaScript and how does it work?",

    choices: [
      "A) The Event Loop is a process that handles asynchronous operations and callbacks.",
      "B) The Event Loop is a data structure for storing DOM events.",
      "C) The Event Loop is a part of the JavaScript engine that compiles code.",
      "D) The Event Loop is a mechanism for defining custom events in JavaScript.",
    ],
    correctAnswer:
      "A) The Event Loop is a process that handles asynchronous operations and callbacks.",
  },
  {
    question:
      "What is the difference between '==' and '===' in JavaScript for comparing values?",

    choices: [
      "A) '==' is used for deep equality comparison, while '===' is for shallow equality comparison.",
      "B) '==' performs type coercion, while '===' enforces strict equality without type conversion.",
      "C) '==' and '===' are interchangeable and have the same behavior.",
      "D) '==' and '===' both perform strict equality checks, but '===' is more efficient.",
    ],
    correctAnswer:
      "B) '==' performs type coercion, while '===' enforces strict equality without type conversion.",
  },
  {
    question: "What is hoisting in JavaScript?",

    choices: [
      "A) Hoisting is a mechanism for creating higher-order functions.",
      "B) Hoisting is a way to control variable visibility in specific scopes.",
      "C) Hoisting is the process of moving variable and function declarations to the top of their containing scope.",
      "D) Hoisting is a tool for optimizing JavaScript code.",
    ],
    correctAnswer:
      "C) Hoisting is the process of moving variable and function declarations to the top of their containing scope.",
  },
  {
    question: "What is the purpose of the `bind()` method in JavaScript?",

    choices: [
      "A) The `bind()` method is used to create a deep copy of an object.",
      "B) The `bind()` method is used to attach a function to a DOM element.",
      "C) The `bind()` method is used to set the value of 'this' in a function and create a new function with a fixed context.",
      "D) The `bind()` method is used for sorting arrays.",
    ],
    correctAnswer:
      "C) The `bind()` method is used to set the value of 'this' in a function and create a new function with a fixed context.",
  },
  {
    question:
      "What is the purpose of the 'async' and 'await' keywords in JavaScript?",

    choices: [
      "A) 'async' and 'await' are used to define asynchronous functions in JavaScript.",
      "B) 'async' is used for defining synchronous functions, while 'await' is used for error handling.",
      "C) 'async' and 'await' are used to declare global variables.",
      "D) 'async' is used to make functions run faster, and 'await' is used for function chaining.",
    ],
    correctAnswer:
      "A) 'async' and 'await' are used to define asynchronous functions in JavaScript.",
  },
  {
    question:
      "What is the difference between 'let', 'const', and 'var' for variable declaration in JavaScript?",

    choices: [
      "A) 'let' and 'const' have block scope, while 'var' has function scope.",
      "B) 'let' and 'var' are used to define constants, while 'const' is for mutable variables.",
      "C) 'let', 'const', and 'var' are interchangeable and have the same behavior.",
      "D) 'let' is used for global variables, 'const' for local variables, and 'var' for function-level variables.",
    ],
    correctAnswer:
      "A) 'let' and 'const' have block scope, while 'var' has function scope.",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",

    choices: [
      "A) 'this' refers to the current function being executed.",
      "B) 'this' refers to the global object in JavaScript.",
      "C) 'this' refers to the object that is calling a method.",
      "D) 'this' is used to access the previous function in the call stack.",
    ],
    correctAnswer: "C) 'this' refers to the object that is calling a method.",
  },
  {
    question:
      "What is the difference between 'map' and 'forEach' methods for iterating over arrays in JavaScript?",

    choices: [
      "A) 'map' and 'forEach' are synonyms with identical functionality.",
      "B) 'map' returns a new array with the results of a provided function on every element, while 'forEach' does not return a new array.",
      "C) 'map' and 'forEach' are used for asynchronous operations.",
      "D) 'map' and 'forEach' are both used to change the length of an array.",
    ],
    correctAnswer:
      "B) 'map' returns a new array with the results of a provided function on every element, while 'forEach' does not return a new array.",
  },
];

const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const timerElement = document.getElementById("time");
const feedbackElement = document.getElementById("feedback");

let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timerInterval;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionsContainer.style.display = "block";
  showNextQuestion();
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(function () {
    time--;
    timerElement.textContent = time;
    if (time <= 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    for (const choice of currentQuestion.choices) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", function () {
        checkAnswer(choice, currentQuestion.correctAnswer);
        currentQuestionIndex++;
        showNextQuestion();
      });
      choicesContainer.appendChild(choiceButton);
    }
  } else {
    endQuiz();
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score += 10;
    feedbackElement.textContent = "Correct!";
  } else {
    time -= 10;
    feedbackElement.textContent = "Wrong! -10 seconds";
  }
}
function endQuiz() {
  questionTitle.textContent = "Quiz Over!";
  choicesContainer.innerHTML = `Your Score: ${score}`;
  feedbackElement.textContent = "";
  clearInterval(timerInterval);

  const initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("placeholder", "Enter your initials");
  initialsInput.setAttribute("maxlength", "3");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", function () {
    const userInitials = initialsInput.value;
    saveHighScore(userInitials, score);
    window.location.href = "highscores.html";
  });

  choicesContainer.appendChild(initialsInput);
  choicesContainer.appendChild(submitButton);
}

function saveHighScore(initials, score) {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.push({ initials, score });

  localStorage.setItem("highScores", JSON.stringify(highScores));
}
