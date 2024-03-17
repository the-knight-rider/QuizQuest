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
  let timerPaused = false; // Added
  
  function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const answerStatusElement = document.getElementById("answer-status"); // Added
    
    // Clear the correct/incorrect message
    answerStatusElement.textContent = ""; // Added
    
    // Enable all option buttons
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => {
      button.disabled = false;
    });
    
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectOption(option);
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
    if (!timerPaused) { // Added condition to check if the timer is paused
      const timerElement = document.getElementById("time");
      timerElement.textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(timer);
        selectOption(null);
      } else {
        timeLeft--;
      }
    }
  }
  
  function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    const optionButtons = document.querySelectorAll("#options button");
  
    // Disable all option buttons
    optionButtons.forEach(button => {
      button.disabled = true;
    });
  
    timerPaused = true; // Pause the timer
  
    if (selectedOption === correctAnswer) {
      document.getElementById("answer-status").textContent = "Correct!";
      score++;
    } else {
      document.getElementById("answer-status").textContent = "Incorrect!";
    }
  
    setTimeout(() => {
      timerPaused = false; // Resume the timer
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        showResult();
      }
    }, 3000);
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
  
  document.getElementById("next-btn").addEventListener("click", selectOption);
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  
  displayQuestion();
  