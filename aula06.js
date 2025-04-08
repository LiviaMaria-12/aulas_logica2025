const prompt = require('prompt-sync')() // importando biblioteca 

// Operações com variáveis - não usar acentos
let nr1 = Number(prompt("Digite um numero"))
let nr2 = Number(prompt("Digite um numero"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let subtracao = nr1 - nr2;
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

let multiplicacao = nr1 * nr2;
console.log(`A multiplicação entre ${nr1} X ${nr2} é igual: ${multiplicacao} `)

let divisao = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

let potencia = nr1 ** nr2
console.log(`A potencia entre ${nr1} ** ${nr2} é igual: ${potencia}`)

// Exercício - Calculando preço do celular com desconto
let valor = Number(prompt("Digite o preço do celular:"))
let desconto = Number(prompt("Digite o preço do desconto:"))

valor = valor - desconto 
console.log(`O valor do celular com o desconto é: R$ ${valor}`)

// Exercício de metade e dobro
let numero3 = Number(prompt("Digite um número:"))
let metade = numero3 / 2
let dobro = numero3 * 2
console.log(`A metade de ${numero3} é igual: ${metade} e o dobro de ${numero3} é igual: ${dobro}`)
 
// Calculando valor de um projeto
let horasTrabalho = 8
let precoHora = 100
let valorDias = 15 
console.log(`Será necessário trabalhar ${horasTrabalho} h por dia, sendo que pagará R$ ${precoHora} por hora, durante ${valorDias} dias`)

let valorPordia = precoHora * horasTrabalho
let valorfinal = valorPordia * valorDias

console.log(`O preço que deverá cobrar para realizar este projeto é R$ ${valorfinal}`)