const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 03
let numero4 = Number(prompt("Digite um numero"))
let dobro = numero4 * 2
let triplo = numero4 * 3
let cubo = numero4 ** 3
console.log(`O dobro de ${numero4} é ${dobro}, seu triplo é ${triplo} e seu cubo é ${cubo}`);