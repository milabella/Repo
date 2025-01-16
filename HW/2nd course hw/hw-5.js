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

//Task 1
function compare(a, b) {
    if (a > b) {
        return b;
    } else if (a === b) {
        return a;
    } else {
        return a;
    }
}
console.log(compare(4, 8));
console.log(compare(6, 6));
console.log(compare(6, 3));

//Task 2
function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
evenOrOdd(13);

//Task 3-1
function square(number) {
    return number * number;
}
console.log(square(12));

//Task 3-2
const squareN = function (number) {
    console.log(number * number);
}
squareN(6);

//Task 4 
function age() {
    let answer = Number(prompt('Сколько вам лет?'));
    if (answer < 0) {
        alert('Вы ввели неправильное значение');
    } else if (answer > 0 && answer <= 12) {
        alert('Привет, друг!');
    } else if (answer >= 13) {
        alert('Добро пожаловать!');
    }
}

//Task 5
let nan = 'Одно или оба значения не являются числом';
function twoNs(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return nan;
    } else {
        return a * b;
    }
}

console.log(twoNs(3, 'and'));
console.log(twoNs(3, 4));

//Task 6
function algorithm() {
    let n = prompt('Введите число от 1 до 10');
    if (isNaN(n)) {
        console.log('Переданный параметр не является числом');
    } else {
        let n2 = n * n;
        console.log('n в кубе равняется', n2);
    }
}

//Task 6
const circle1 = {
    'radius': 13,
    getArea() {
        return 3.14 * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    'radius': 26,
    getArea() {
        return 3.14 * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * 3.14 * this.radius;
    }
}

console.log(circle2.getArea());
console.log(circle2.getPerimeter());