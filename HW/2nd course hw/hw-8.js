// Основное задание 
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

// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
function isPositive(item) {
    return item > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];

    for (let item of arr) {
        if (ruleFunction(item)) {
            output.push(item);
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

// Задание 3
let timerId = setInterval(() => {
    const date = new Date();
    console.log(date.toLocaleString());
}, 3000);
setTimeout(() => {
    clearInterval(timerId);
    console.log("30 секунд прошло");
}, 1000 * 30);

// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log("Прошла одна секунда");
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб')); 