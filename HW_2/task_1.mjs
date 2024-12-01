/*
Task 1. У консольний додаток передають через параметр пенсійний вік. Наприклад
node app.mjs –-pension=65
Потім питаємо у терміналі користувача скільки йому років (використати “readline”) і кажемо чи він є пенсіонером.
*/
import readline from 'readline'

const argsStr = process.argv.slice(2).join('&')
const argsObj = new URLSearchParams(argsStr)
const pensionAge = argsObj.get('--pension')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`How old are you?`, (answer) => {
  if (answer >= parseInt(pensionAge)) {
    console.log(`You are a senior citizen`)
  } else {
    console.log(`You aren't a senior citizen`)
  }

  rl.close()
})

