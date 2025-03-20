// Игра «Переверни текст»

const words = ["Bottle", "Fridge", "Carpet", "Watch", "Curtain", "Glass"];
let word = "";

function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    return word.split('').reverse().join('');
}
function reverseWordGame() {
    let reversedWord = randomWord();
    let userAnswer = prompt(`Reverse the word ${reversedWord}`);

    if (userAnswer && userAnswer.toLowerCase() === word.toLowerCase()) {
        alert('Correct');
    } else {
        alert('Try again');
    }
}

// Игра «Викторина»

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quizGame() {
    let correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        let currentQuestion = quiz[i];
        let userAnswer = prompt(`Enter the number of the correct answer:\n${currentQuestion.question}\n${currentQuestion.options.join("\n")}`);

        if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }
    alert(`${correctAnswers} out of ${quiz.length} correct answers`);
}

// 1
let string = "js";
console.log(string.toUpperCase());

// 2
const array = ["One string", "One again", "Two string", "Three"];
array.forEach((array) => {
    if (array.toLowerCase().startsWith("One".toLowerCase())) {
        console.log(array)
    };
});

// 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// 4
const numberSet = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numberSet));
console.log(Math.max(...numberSet));

// 5
function randomNumber() {
    return Math.floor(Math.random() * 11);
}
console.log(randomNumber());

// 6
function randomArray(number) {
    const rA = Array.from({ length: Math.floor(number / 2) }, () => Math.floor(Math.random() * (number + 1)));
    return rA;
}

console.log(randomArray(10));

// 7
function range(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(range(1, 20));

// 8
const date = new Date();
const fullDate = date.toLocaleString();
console.log(fullDate);

// 9
const currentDay = new Date();
currentDay.setDate(currentDay.getDate() + 73);
console.log(currentDay.toLocaleString());

// 10
const days = ["Воксресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullD = "Дата: " + myDate.getDate() +
    " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() +
    " — это " + days[myDate.getDay()] +
    ". Время: " + myDate.getHours() +
    ":" + myDate.getMinutes() +
    ":" + myDate.getSeconds();
console.log(fullD); 