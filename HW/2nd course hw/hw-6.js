function mathGame() {
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
        score++;
    } else {
        alert(`Wrong! The correct answer is ${answer}.`);
    }

    alert('Game over!');

}

//TASK 1 
const array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    if (array[i] == 10) break;
    console.log(array[i]);
}

//TASK 2
array.forEach((el, index) => {
    if (el == 4) {
        console.log(`The index of ${el} is ${index}`)
    }
});

//TASK 3
let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(arr);

//TASK 4
let outside = [];

for (let i = 0; i < 3; i++) {
    let inside = [];
    for (let i = 0; i < 3; i++) {
        inside.push(1);
    }
    outside.push(inside);
}

console.log(outside);

//TASK 5
const ones = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    ones.push(2);
}
console.log(ones);

//TASK 6 
const arrSort = [9, 8, 7, 'a', 6, 5];
console.log(arrSort.sort());
const onlyN = arrSort.filter(item => typeof item === 'number');
console.log(onlyN);

//TASK 7
const guessNumbers = [9, 8, 7, 6, 5];
let userA = Number(prompt('Guess a number from 1 to 10 in the array'));

if (guessNumbers.includes(userA)) {
    alert('Угадал!');
} else {
    alert('Не угадал');
};

//TASK 8 
let letters = 'abcdef';
let arrayLetters = letters.split('');
console.log(arrayLetters);
arrayLetters.reverse();
console.log(arrayLetters);
let letters2 = arrayLetters.join('');
console.log(letters2);

//TASK 9 
const arrSpread = [
    [1, 2, 3],
    [4, 5, 6]
];
const spread = [...arrSpread[0], ...arrSpread[1]];
console.log(spread);

//TASK 10 
const randomArray = [4, 7, 2, 5, 4, 9, 7, 6];
for (let i = 0; i < randomArray.length - 1; i += 1) {
    const sum = randomArray[i] + randomArray[i + 1];
    console.log(sum);
};

//TASK 11 
let powers = randomArray.map(item => item * item);
console.log(powers);

//TASK 12 
let catalog = ['Table', 'Couch', 'Chair'];
let catalog2 = catalog.map(item => item.length);
console.log(catalog2);

//TASK 13
let task13 = [2, 5, 4, -6, -4, -8];
let task13Result = task13.filter(item => item < 0);
console.log(task13Result);

//TASK 14
const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenArray = originalArray.filter(num => num % 2 === 0);

console.log('Original Array:', originalArray);
console.log('Even Numbers Array:', evenArray);

//TASK 15
const random2 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const average = random2.reduce((sum, num) => sum + num, 0) / random2.length;

console.log('Random Array:', random2);
console.log('Average:', average);
