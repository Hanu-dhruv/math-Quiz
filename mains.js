const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is 3 * 5?", answer: "15" },
    { question: "What is 10 - 7?", answer: "3" },
    // Add more questions here
  ];
  
  let currentPlayer = 1;
  let score1 = 0;
  let score2 = 0;
  let currentQuestionIndex = -1;
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      endGame();
      return;
    }
  
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < 4; i++) {
      const option = document.createElement("button");
      option.textContent = i === 0 ? questions[currentQuestionIndex].answer : getRandomNumber(1, 20);
      option.onclick = () => checkAnswer(option.textContent);
      optionsElement.appendChild(option);
    }
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const playerScoreElement = document.getElementById(`score${currentPlayer}`);
  
    if (selectedOption === correctAnswer) {
      playerScoreElement.textContent = ++(currentPlayer === 1 ? score1 : score2);
    }
  
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "block";
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function endGame() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElement.textContent = "Game Over!";
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";
  }
  
  nextQuestion();


  document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  if (player1 === "" || player2 === "") {
    alert("Please enter both players' names.");
  } else {
 
    window.location.href = `game.html?player1=${encodeURIComponent(player1)}&player2=${encodeURIComponent(player2)}`;
  }
}

const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is 3 * 5?", answer: "15" },
    { question: "What is 10 - 7?", answer: "3" },
    // Add more questions here
  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const player1Name = urlParams.get("player1");
  const player2Name = urlParams.get("player2");
  
  document.getElementById("player1Name").textContent = player1Name;
  document.getElementById("player2Name").textContent = player2Name;
  
  let currentPlayer = 1;
  let score1 = 0;
  let score2 = 0;
  let currentQuestionIndex = -1;
  
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      endGame();
      return;
    }
  
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < 4; i++) {
      const option = document.createElement("button");
      option.textContent = i === 0 ? questions[currentQuestionIndex].answer : getRandomNumber(1, 20);
      option.onclick = () => checkAnswer(option.textContent);
      optionsElement.appendChild(option);
    }
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const playerScoreElement = document.getElementById(`score${currentPlayer}`);
  
    if (selectedOption === correctAnswer) {
      playerScoreElement.textContent = ++(currentPlayer === 1 ? score1 : score2);
    }
  
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "block";
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function endGame() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElement.textContent = "Game Over!";
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";
  }