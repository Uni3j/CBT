const questions = [
    {
        question: "What does \"Forex\" stand for?",
        answers: ["Foreign Exchange", "Foreign Execution", "Financial Operations", "Future Exchange"],
        correct: 0
    },
    {
        question: "What is the primary currency pair in Forex trading?",
        answers: ["USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD"],
        correct: 1
    },
    {
        question: "What is a \"pip\" in Forex trading?",
        answers: ["Percentage in Point", "Price in Percentage", "Point in Price", "Profit in Percentage"],
        correct: 2
    },
    {
        question: "Which of the following is a major Forex trading center?",
        answers: ["London", "Tokyo", "New York", "All of the above"],
        correct: 3
    },
    {
        question: "What does it mean to \"go long\" in Forex trading?",
        answers: ["Buy a currency", "Sell a currency", "Hold a currency", "Short a currency"],
        correct: 0
    },
    {
        question: "What does \"leverage\" mean in Forex trading?",
        answers: ["Borrowing money to increase trading position", "Selling off assets quickly", "Reducing trading risk", "Calculating potential profit"],
        correct: 0
    },
    {
        question: "What is a \"spread\" in Forex trading?",
        answers: ["Difference between bid and ask price", "The cost of a trade", "The profit margin", "The amount of leverage used"],
        correct: 0
    },
    {
        question: "Which currency is known as the \"greenback\"?",
        answers: ["Euro", "British Pound", "Japanese Yen", "US Dollar"],
        correct: 3
    },
    {
        question: "What is a \"stop-loss\" order?",
        answers: ["An order to buy at a lower price", "An order to sell at a higher price", "An order to limit losses by selling at a specific price", "An order to hold a position"],
        correct: 2
    },
    {
        question: "What is \"margin\" in Forex trading?",
        answers: ["The amount of money required to open a trade", "The profit made from a trade", "The difference between bid and ask price", "The interest paid on a trade"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a function of a Forex trading app?",
        answers: ["Real-time currency price quotes", "Managing trades", "Providing educational resources", "Delivering physical currencies"],
        correct: 3
    },
    {
        question: "What does \"bearish\" mean in Forex trading?",
        answers: ["Expecting a currency to rise", "Expecting a currency to fall", "Holding a currency long-term", "Trading with no leverage"],
        correct: 1
    },
    {
        question: "What does \"bullish\" mean in Forex trading?",
        answers: ["Expecting a currency to rise", "Expecting a currency to fall", "Short-selling a currency", "Exiting all trades"],
        correct: 0
    },
    {
        question: "Which of the following is a common Forex trading platform?",
        answers: ["MetaTrader", "Shopify", "WordPress", "Zoom"],
        correct: 0
    },
    {
        question: "What is \"technical analysis\" in Forex trading?",
        answers: ["Analyzing economic indicators", "Examining historical price movements", "Studying political events", "Reading financial news"],
        correct: 1
    },
    {
        question: "What is \"fundamental analysis\" in Forex trading?",
        answers: ["Examining historical price movements", "Studying economic indicators and news", "Using mathematical models", "Comparing different currencies"],
        correct: 1
    },
    {
        question: "What is \"scalping\" in Forex trading?",
        answers: ["Holding trades for long-term profits", "Making many small trades for small profits", "Analyzing economic news", "Using no leverage"],
        correct: 1
    },
    {
        question: "What is the typical market hours for Forex trading?",
        answers: ["24 hours a day, 5 days a week", "8 hours a day, 5 days a week", "24 hours a day, 7 days a week", "12 hours a day, 5 days a week"],
        correct: 0
    },
    {
        question: "What is the role of a \"broker\" in Forex trading?",
        answers: ["To buy and sell currencies on behalf of traders", "To regulate the Forex market", "To provide economic analysis", "To issue currency"],
        correct: 0
    },
    {
        question: "Which of the following is a risk management tool in Forex trading?",
        answers: ["Leverage", "Margin Call", "Stop-Loss Order", "High Frequency Trading"],
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

    // Disable all buttons after selecting an answer and highlight the correct one
    Array.from(document.getElementsByClassName("answer-btn")).forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add("correct");
        }
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
