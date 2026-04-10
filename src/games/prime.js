import { runGame } from '../engine.js';

const makeQuestion = () => {
  const randomNum = Math.floor(Math.random() * 55);
  let correctAnswer;
  if (randomNum < 2) {
    correctAnswer = 'no';
  } else if (randomNum === 2) {
    correctAnswer = 'yes';
  } else if (randomNum % 2 === 0) {
    correctAnswer = 'no';
  } else {
    let isPrime = true;
    for (let a = 3; a < randomNum; a += 1) { // Заменили a++ на a += 1
      if (randomNum % a === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
  }
  return { question: String(randomNum), correctAnswer: String(correctAnswer) };
};

export default () => runGame('Answer "yes" if given number is prime. Otherwise answer "no".', makeQuestion);
