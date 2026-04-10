import { runGame } from "../engine.js";
const makeQuestion = () => {
    let start = Math.floor(Math.random() * 11) + 1
    let step = Math.floor(Math.random() * 6) + 1
    let length = Math.floor(Math.random() * 7) + 5
    const arr = []
    for (let i = 0; i < length; i++) {
        let currentElement = start + i * step
        arr.push(currentElement)
    }
    let hideIndex = Math.floor(Math.random() * length)
    let correctAnswer = arr[hideIndex]
    arr[hideIndex] = '..'
    return { question: arr.join(' '), correctAnswer: String(correctAnswer) }
}
export default () => runGame ('What number is missing the progression', makeQuestion)