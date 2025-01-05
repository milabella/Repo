// Задание 1
let password = 'пароль';
let input = prompt('Введите пароль');
if (input === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

// Задание 2
let c = 4;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 45;
let e = 108;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Номер месяца должен быть от 1 до 12')
}
var season = prompt('Введите номер месяца, чтобы узнать сезон');
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Ошибка');
}

// Доп.задания

// Задание 1
let N = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(N)) {
    console.log('Это не число');
} else {
    console.log('Вы ввели число', N);
}
if (N % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// Задание 2
let clientOS = 0;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
}

// Задание 3
let clientOS = 0;
let clientDeviceYear = 2015;
let message;
if (clientOS === 0) {
    message = clientDeviceYear < 2015 ? 'Установите облегченную версию приложения для iOS по ссылке' : 'Установите версию приложения для iOS по ссылке';
} else if (clientOS === 1) {
    message = clientDeviceYear < 2015 ? 'Установите облегченную версию приложения для Android по ссылке' : 'Установите версию приложения для Android по ссылке';
}
