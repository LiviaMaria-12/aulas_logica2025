const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 01
let numero1 = Number(prompt("Digite um número")) // pode colocar o tipo de número (parseFloat ou parseInt) invés de Number
let numero2 = Number(prompt("Digite outro número"))
let soma = numero1 + numero2
console.log(`A soma entre ${numero1} e ${numero2} é igual ${soma}`);
