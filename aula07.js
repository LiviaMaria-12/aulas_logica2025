
// Operadores relacionais 
let a = 2
let b = 3

console.log(a == b) // relação de igualdade 
console.log(a != b) // relação de diferença
console.log(a > b) // maior
console.log(a >= b) // maior ou igual
console.log(a < b) // menor 
console.log(a <= b) // menor ou igual 

// Estruturas condicionais 
let tenhoingresso = true 
if(tenhoingresso == true){
        console.log("Posso entrar!") // bloco de código 
}

const prompt = require('prompt-sync')() 

// Validando maioridade 

// Recerbe o valor da idade 
let idade = Number(prompt("Qual a sua idade? "))

// Verificar se é maior ou igual a 18
if(idade >= 18){
    console.log("Maior idade")
}

// Outro exmeplo de estrutura condicional (if-else)
tenhoingresso = true 
if(tenhoingresso == true){
        console.log("Posso entrar!") // bloco de código 
}else{
    console.log("Estou barrada no baile!")
}

idade = Number(prompt("Digite sua idade: "))
// Verificar se é maior que 18
if(idade >= 18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade!")
}
