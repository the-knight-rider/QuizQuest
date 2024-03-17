const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');

    quizContainer.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    document.getElementById('start-btn').classList.add('hidden');

    showQuestion(questionElement, optionsContainer, nextButton);
}

function showQuestion(questionElement, optionsContainer, nextButton) {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option, nextButton));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption, nextButton) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(document.getElementById('question'), document.getElementById('options'), nextButton);
    } else {
        alert('Quiz completed!');
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('start-btn').classList.remove('hidden');
}
