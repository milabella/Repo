//Task 1
let i = 0;
while (i < 2) {
    console.log('Hello');
    i++;
}

//Task 2
let y = 1;
do {
    console.log(y);
    y++;
} while (y < 6);

//Task 3
let x = 7;
do {
    console.log(x);
    x++;
} while (x < 23);

//Task 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (const key in obj) {
    console.log(`${key}: зарплата ${obj[key]} долларов`);
}

//Task 5
let n = 1000;
let num = 0; 
while (n >= 50) {
    n /= 2;
    num++;
}
console.log('The resulting number is', n);
console.log('The amount of divisions is', num);

//Task 6
for (let friday = 3; friday <= 31; friday += 7) {
    console.log(`Cегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
};

// EXTRA
// 1
let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    iterations++;
}
console.log('The resulting number is', k);
console.log('The amount of iterations is', iterations);

//2
const months = {
    January: 1,
    February: 2, 
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
}

for (let key in months) {
    console.log(`The month of ${key} is number ${months[key]}`)
}

//3
const book = {
    name: 'A Wild Sheep Chase',
    author: 'Haruki Murakami',
    published: 1982,
    genre: 'Magical realism'
}
for (let key in book) {
    console.log(`${key} : ${book[key]}`)
}

//4
const random = [1, 25, 35, 44, 7, 5, 8, 67, 93, 20];
let minNumber = 100;
for (let key in random) {
    if(random[key] < minNumber){
        minNumber = random[key];
    }
}
console.log('The minimum number is', minNumber); 