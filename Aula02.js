// Importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')()

// Variaveis e constantes 
// Passo 1: receber nome da pessoa
let nome = "Ayrton"
// Passo 2: receber idade da pessoa
let idade  = 36
// Passo 3: receber peso da pessoa
let peso = 76.5
// Passo 4: Exibir o nome, a idade e o peso
console.log(nome, idade, peso);

// Receber e armazenar o texto em uma variavel
   let    curso   =    "Desenvolvimento de Sistemas"
// Tipo   nome  recebe   valor da variavel

// Exibir o valor armazenado 
console.log("curso") // Imprimir uma string (texto)
console.log(curso) // Imprimir valor que está dentro da variavel
console.log("Curso", curso)

// Criando e atribuindo valor a outras variaveis 
let idade2 = 35 // Valor do tipo int 
let temperatura = 23.5 // Valor do tipo float 
let nome2 = "Lyuz"

console.log("Olá", nome2, "Você tem:", idade2, "E hoje está fazendo:", temperatura, "°C")

// Usando templete string
console.log( `Olá ${nome2}, você tem ${idade2} e hoje está fazendo: ${temperatura} °C`)

// Usando boolean 
let chovendo = false 
let dia = true 
// Constantes não podem atribuir novos valores
const PI = 3.1415
console.log(PI)

// Utilizando prompt para receber dados 
// Entrada de dados 
// No prompt, sempre recebemos uma string 
nome = prompt('Qual é seu nome?')

// usando parseInt ou parseFloat converte os valores recebidos
// que vem como string para int ou float
idade = parseInt(prompt('Qual a sua idade?'))
peso = parseFloat(prompt('Qual seu peso?'))
console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)

// Valida tipo de variavel
console.log(typeof(idade))
console.log(typeof(peso))
// Após a conversão dos valores é possível calcular 
//Calculos matematicos
console.log(idade + peso)