/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

// Определяем функцию с рандомным числом
const randomInt = (max) => Math.floor(Math.random() * max);

// Определяем функцию с игрой
const play = () => {
    // Приветствуем пользователя
    console.log('Welcome to the Brain Games!');
    // Спрашиваем имя пользователя и получаем ответ
    const name = () => readlineSync.question('May I have your name? ');
    // Имя пользователя записываем в переменную userName
    const userName = name();
    // Выводим привествие
    console.log(`Hello ${userName}!`);
    // Выводим правило игры
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    // Заходим в цикл
    for (let i = 1; i <= 3;) {
    // Обьявляем переменную с рандомным числом
    const number = randomInt(100);
    // Выводим вопрос с числом
    console.log(`Question: ${number}`);
    // Получаем ответ от пользователя
    const answerUser = readlineSync.question('Your answer: ');
    // Добавляем условия, если пользователь угадал, то выводим "Correct" и увеличием счетчик на 1
    if ((number % 2 === 0 && answerUser === 'yes') || (number % 2 !== 0 && answerUser === 'no')) {
        console.log('Correct!');
        i += 1;
    // Если пользователь не угадал
    } else {
    // Создаем костанту с противоположным ответом пользователя
        const opposite = () => (answerUser === 'yes' ? 'no' : 'yes');
    // Объявляем переменную с сообщением об ошибке
        const error = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite()}'.\n Let's try again, ${userName}!`;
    // Выводим сообщение об ошибке
        console.log(error);
    // Завершаем игру
        return error;
    }
}
// Если пользователь 3 раза подряд угадал четность, выводим сообщение:
console.log(`Congratulations! ${userName}`);
};

play();
