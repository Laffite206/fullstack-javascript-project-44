import { runGame } from '../engine.js'

const gcd = (a, b) => {
  let x = a
  let y = b
  while (y !== 0) {
    x %= y;
    [x, y] = [y, x]
  }
  return x
}

const makeQuestion = () => {
  const randomNum1 = Math.floor(Math.random() * 50)
  const randomNum2 = Math.floor(Math.random() * 55)
  const correctAnswer = gcd(randomNum1, randomNum2)
  return { question: `${randomNum1} ${randomNum2}`, correctAnswer }
}

export default () => runGame('Find the greatest common divisor of given numbers.', makeQuestion)
