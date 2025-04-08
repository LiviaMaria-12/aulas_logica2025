const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 07 - foi corrigida
let dinheiro = Number(prompt("Digite quantos reais você tem na sua carteira: "))
let cotacao = parseFloat(prompt("Digite a cotação do Dólar:  "))
let dolar = dinheiro / cotacao
console.log(`Você tem R$ ${dinheiro}, o que equivale à ${dolar.toFixed(2)} dólares`) // usando esta função, é possível limitar a quantidade de casas de um número