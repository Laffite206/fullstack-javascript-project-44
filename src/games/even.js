#!/usr/bin/env node
import { runGame } from '../engine.js'

const makeQuestion = () => {
  let randomNum = Math.floor(Math.random() * 51)
  let correctAnswer
  if (randomNum % 2 === 0) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }
  return { question: randomNum, correctAnswer }
}

export default () => runGame('Answer "yes" if the number is even, otherwise answer "no".', makeQuestion)