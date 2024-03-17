const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Berlin", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      answer: "Mitochondria"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      answer: "Alexander Graham Bell"
    },
    {
      question: "What is the national animal of China?",
      options: ["Panda", "Tiger", "Lion", "Elephant"],
      answer: "Panda"
    }
  ];
  
  let currentQuestion = 0;
  let timeLeft = 10;
  let timer;
  let score = 0;
  
  function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = checkAnswer;
      optionsElement.appendChild(button);
    });
    
    startTimer();
  }
  
  function startTimer() {
    timeLeft = 10;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    const timerElement = document.getElementById("time");
    timerElement.textContent = timeLeft;
    
    if (timeLeft === 0) {
      clearInterval(timer);
      checkAnswer();
    } else {
      timeLeft--;
    }
  }
  
  function checkAnswer(event) {
    clearInterval(timer);
    const selectedOption = event ? event.target.textContent : null;
    const correctAnswer = questions[currentQuestion].answer;
    
    if (selectedOption === correctAnswer) {
      score++;
      
    } 
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
    
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `Your score: ${score}/${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  }
  
  document.getElementById("next-btn").addEventListener("click", checkAnswer);
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  
  displayQuestion();
  