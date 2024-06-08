const questions = [
    {
        question: "What is my real name?",
        answers: ["unije david", "unije nelson", "unije jefferson", "unije benard"],
        correct: 2
    },
    {
        question: "What am into that gives me money?",
        answers: ["yahoo", "forex trading", "white hat hacker", "black hat hacker"],
        correct: 1
    },
    {
        question: "who is my real friend?",
        answers: ["bloga", "omega", "jarva", "emzzy"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);

document.addEventListener("DOMContentLoaded", () => {
    showQuestion(currentQuestionIndex);
});

function showQuestion(index) {
    const questionContainer = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const question = questions[index];

    questionContainer.textContent = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach((answer, i) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(i, button));
        if (selectedAnswers[index] === i) {
            button.classList.add(selectedAnswers[index] === question.correct ? "correct" : "incorrect");
        }
        answerButtons.appendChild(button);
    });

    updateNavigation();
}

function selectAnswer(answerIndex, button) {
    const question = questions[currentQuestionIndex];
    selectedAnswers[currentQuestionIndex] = answerIndex;

    if (answerIndex === question.correct) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }

    // Disable all buttons after selecting an answer
    Array.from(document.getElementsByClassName("answer-btn")).forEach(btn => {
        btn.disabled = true;
    });
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    const score = selectedAnswers.reduce((total, answer, index) => {
        return answer === questions[index].correct ? total + 1 : total;
    }, 0);
    alert(`You scored ${score} out of ${questions.length}`);
}

function updateNavigation() {
    document.getElementById("prev-btn").style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    document.getElementById("next-btn").style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submit-btn").style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}
