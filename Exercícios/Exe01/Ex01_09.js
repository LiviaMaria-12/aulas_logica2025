const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 09 
let preco = Number(prompt("Digite o preço do produto:"))
let novovalor = preco * 95
let novopreco = novovalor / 100
console.log(`O preço do produto com 5% de desconto é de ${novopreco}`)