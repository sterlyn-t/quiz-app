const quizData = [
    {
        question: "A table showing the relationship between the price of a product and the quantity of the product demanded",
        a: "demand schedule",
        b: "demand curve",
        c: "supply curve",
        d: "deadweight loss",
        correct: "a",
    },
    {
        question: "A good for which the demand increases as income falls and decreases as income rises.",
        a: "economic model",
        b: "inferior good",
        c: "black market",
        d: "normal good",
        correct: "b",
    },
    {
        question: "The situation that occurs in markets when both the buyer and seller of a product are made better off by the transaction",
        a: "voluntary exchange",
        b: "market equilibrium",
        c: "quantity supplied",
        d: "macroeconomics",
        correct: "a",
    },
    {
        question: "A situation in which the quantity demanded is greater than the quantity supplied",
        a: "shortage",
        b: "black market",
        c: "economic model",
        d: "surplus",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
