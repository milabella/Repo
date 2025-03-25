// Игра "Угадай число"

function guessTheNumber(number = 75) {
    let userGuess = null;

    while (userGuess !== number) {
        userGuess = prompt('Угадайте число от 1 до 100');
        if (userGuess < number) {
            alert('Число больше');
        } else if (userGuess > number) {
            alert('Число меньше');
        } else {
            alert('Вы угадали!');
            return;
        }
    }
}

// Игра "Простая арифметика"

function mathGame() {
    let correctAnswers = 0;

    for (let i = 0; i < 5; i++) {
        function randomNumber(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }

        const operations = ['+', '-', '*', '/'];
        const N1 = randomNumber(1, 10);
        const N2 = randomNumber(1, 10);
        const operation = operations[randomNumber(0, operations.length - 1)];

        let answer;
        switch (operation) {
            case "+":
                answer = N1 + N2;
                break;
            case "-":
                answer = N1 - N2;
                break;
            case "*":
                answer = N1 * N2;
                break;
            case "/":
                answer = Math.floor(N1 / N2);
                break;
        }

        const userAnswer = prompt(`What is ${N1} ${operation} ${N2}?`, 10);

        if (userAnswer == answer) {
            alert('Correct!');
        } else {
            alert(`Wrong! The correct answer is ${answer}.`);
        }

        if (parseInt(userAnswer) === answer) {
            correctAnswers++;
        }
    }

    alert(`${correctAnswers} out of 5 correct answers`);

}

// Игра "Переверни текст"

const words = ["Bottle", "Fridge", "Carpet", "Watch", "Curtain", "Glass"];

function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    return word.split('').reverse().join('');
}
function reverseWordGame() {
    for (let i = 0; i < 5; i++) {
        let reversedWord = randomWord();
        let userAnswer = prompt(`Reverse the word ${reversedWord}`);

        if (userAnswer && userAnswer.toLowerCase() === word.toLowerCase()) {
            alert('Correct');
        } else {
            alert('Try again');
        }
    }
}

// Игра "Викторина

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

// Игра "Камень, ножницы, бумага"

function rockPaperSc() {
    const words = ["камень", "ножницы", "бумага"];
    let userAnswer = prompt("Введите 'камень', 'ножницы' или 'бумага', чтобы начать игру.");

    while (userAnswer === null || !words.includes(userAnswer.toLowerCase())) {
        alert("Некорректный ввод! Попробуйте снова.");
        userAnswer = prompt("Введите 'камень', 'ножницы' или 'бумага', чтобы начать игру.");
    }

    userAnswer = userAnswer.toLowerCase();
    const compAnswer = words[Math.floor(Math.random() * words.length)];
    let result = "";

    if (userAnswer.toLowerCase() === compAnswer.toLowerCase()) {
        result = "Ничья";
    } else if (
        (userAnswer == "камень" && compAnswer == "ножницы") ||
        (userAnswer == "ножницы" && compAnswer == "бумага") ||
        (userAnswer == "бумага" && compAnswer == "камень")
    ) {
        result = "Победа!";
    } else {
        result = "Поражение:(";
    }

    alert(`Ваш выбор: ${userAnswer}\nВыбор компьютера: ${compAnswer}\n${result}`);
}

// Игра "Генератор случайных цветов"

const btnEl = document.querySelector('.button-color');
const minigamesEl = document.querySelector('.minigames');

const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#00FFFF", "#FF00FF"];

btnEl.addEventListener('click', function (event) {
    event.preventDefault();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    minigamesEl.classList.add('change-color');
    minigamesEl.style.backgroundColor = randomColor;
});