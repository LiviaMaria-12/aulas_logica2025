const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 04
let nota1 = Number(prompt("Digite a primeira nota do aluno"))
let nota2 = Number(prompt("Digite a segunda nota do aluno"))
let somanota = nota1 + nota2 
let media = somanota / 2 // ou juntar e colocar entre parentêses 
console.log(`A média deste aluno é ${media}`);