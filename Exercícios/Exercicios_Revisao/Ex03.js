const prompt = require('prompt-sync')()

let num1 = parseInt(prompt("Digite um número inteiro: "))
let num2 = parseInt(prompt("Digite outro número inteiro: "))

console.log(`A divisão entre esses números é ${num1 / num2}!`)