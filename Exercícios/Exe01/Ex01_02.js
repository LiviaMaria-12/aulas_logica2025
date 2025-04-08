const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 02
let numero3 = Number(prompt("Digite um número inteiro")) // pode limitar usando parseInt
let nAntecessor = numero3 - 1
let nsucessor = numero3 + 1
console.log(`O Antecessor de ${numero3} é ${nAntecessor} e seu sucessor é ${nsucessor}`); // pode juntar e somar na parte de exibir