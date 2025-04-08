const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 05
let valorMt = Number(prompt("Digite o valor em metros"))
let valorCm = valorMt * 100
let valorMi = valorMt * 1000 
let valorkm = valorMt / 1000
console.log(`O valor ${valorMt} é ${valorCm} em centímetro, ${valorMi} em milímetros e ${valorkm} em km`);