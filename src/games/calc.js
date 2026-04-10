import { runGame } from '../engine.js'

const makeQuestion = () => {
  const expression = ['+', '-', '*']
  const randomNum1 = Math.floor(Math.random() * 50)
  const randomNum2 = Math.floor(Math.random() * 55)
  const randomOperation = expression[Math.floor(Math.random() * expression.length)]
  let correctAnswer
  if (randomOperation === '+') {
    correctAnswer = randomNum1 + randomNum2
  }
  else if (randomOperation === '-') {
    correctAnswer = randomNum1 - randomNum2
  }
  else if (randomOperation === '*') {
    correctAnswer = randomNum1 * randomNum2
  }
  return { question: `${randomNum1} ${randomOperation} ${randomNum2}`, correctAnswer: String(correctAnswer) }
}

export default () => runGame('What is the result of the expression?', makeQuestion)
