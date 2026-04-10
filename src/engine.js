import readlineSync from 'readline-sync'
import { mainName } from './cli.js'

export const runGame = (gameRule, makeQuestion) => {
  const name = mainName
  console.log(`Hello, ${name}!`)
  console.log(gameRule)

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = makeQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}