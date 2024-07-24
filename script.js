// scripts.js

let answers = {};

function selectAnswer(questionNumber, answer) {
    answers[questionNumber] = answer;
    const currentQuestion = document.querySelector(`.quiz-question[data-question="${questionNumber}"]`);
    const nextQuestion = document.querySelector(`.quiz-question[data-question="${questionNumber + 1}"]`);

    currentQuestion.style.display = 'none';
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result');
    const fruitType = document.getElementById('fruit-type');
    const fruitImg = document.getElementById('fruit-img');
    const fruit = calculateResult();

    fruitType.textContent = fruit.type;
    fruitImg.src = fruit.img;
    fruitImg.style.display = 'block';

    resultContainer.style.display = 'block';
}

function calculateResult() {
    let score = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };

    for (let key in answers) {
        score[answers[key]] += 1;
    }

    let maxScore = 0;
    let maxType = 'a';

    for (let type in score) {
        if (score[type] > maxScore) {
            maxScore = score[type];
            maxType = type;
        }
    }

    switch (maxType) {
        case 'a':
            return { type: "Strawberry", img:"strawberries-3359755_1280.jpg" };
        case 'b':
            return { type: "Lychee", img: "lychee-5368360_1280.jpg" };
        case 'c':
            return { type: "Blueberry", img: "blueberries-3513547_1280.jpg" };
        case 'd':
            return { type: "Orange", img: "oranges-1995079_1280.jpg" };
        default:
            return { type: "Strawberry", img: "strawberries-3359755_1280.jpg" };
    }
}

