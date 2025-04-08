const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 10 
let km = Number(prompt("Digite a quantidade de km percorrido pelo carro alugado:"))
let dias = Number(prompt("Digite a quantidade de dias que o carro foi alugado:"))
let diasvalor = dias * 60
let kmvalor = km * 0.15
let precofinal = kmvalor + diasvalor
console.log(`O preço final a pagar pelo carro alugado é de R$ ${precofinal.toFixed(2)}`)