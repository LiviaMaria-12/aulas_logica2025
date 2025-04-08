const prompt = require('prompt-sync')() // declaração de variáveis

console.log("Exercicios aula de logica")
console.log("Bem-vindo ao curso de JavaScript!") 
console.log("Estou aprendendo a usar o console.log")

console.log(15 + 25) // soma
console.log(100 - 45) // subtração 
console.log(12 * 7) // multiplicação 
console.log(144 / 12) // divisão
console.log(20 % 3) // modulo
console.log(2 ** 5) // potencia

//EXECÍCIOS DE VARIÁVEIS 
//Atividade 01
let nomeAluno = "Livia"
let altura = 1.60
let escola = "Sesi"
let ano = 2025
console.log(`A Aluna: ${nomeAluno}, tem: ${altura} de altura, e está estudando na escola: ${escola} em: ${ano}`)

// Atividade 02
let nomeProfessor = "Michelli"
let materia = "ingles"
let anoingresso = 2021
console.log(`A professora ${nomeProfessor}, que leciona a materia ${materia}, está desde ${anoingresso}, na escola ${escola} `)

//Atividade 03 - reatribuindo valores para nossas variáveis

nomeAluno = prompt('Qual é o seu nomeAlunoa?')
altura = parseFloat(prompt('Qual é a sua altura?'))
escola = prompt('Qual é a escola que você estuda?')
ano = parseInt(prompt('Qual ano estamos?'))
nomeProfessor = prompt("Qual é sua professora favorita?")
materia = prompt("Qual materia ela leciona?")
anoingresso = parseInt('Qual ano ela ingressou?')
console.log( `Seu nome é: ${nomeAluno}, sua altura é: ${altura}, você estuda:${escola}, no ano de ${ano}, seu professor favorito é: ${nomeProfessor}, materia ele leciona é ${materia}, e ele ingressou em ${anoingresso} `)