import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");

export const userName = () => {
    let name = readlineSync.question('May I have your name? ');
    console.log('Hi ' + name + '!');
}