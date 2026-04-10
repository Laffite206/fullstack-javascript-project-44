import readlineSync from 'readline-sync'

export const getName = () => {
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name ? ')
  // console.log(`Hello, ${name}!`)
  return name
}
export default () => {
  console.log(`Hello, ${mainName}`)
}
export const mainName = getName()
// name