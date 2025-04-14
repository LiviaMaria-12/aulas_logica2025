let frutas = ["Maça", "Banana", "Uva", "Abacaxi"]

// A variável x serve para iterar os valores até o limite da lista.
// O nome não é obrigatoriamente i, x ou contador 

for(let x = 0; x < frutas.length; x++){
    // O length identifica o tamanho total da lista 
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ["Bill Gates", "Rafinha", "Raul Seixas", "Esteves", "Vieira"]
// Para cada nome da listaNomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}

// Verificando se é uma consoante
const prompt = require('prompt-sync')()

let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let letra = prompt("Digite uma letra: ")

// Se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log("É uma vogal!")
    
}else if (consoantes.includes(letra.toLowerCase()))
{
    console.log("É uma consoante!")
}
else
{
    console.log("Não é uma letra!")
}

// Obtendo a posição do item
let listaFrutas = ["Maça", "Banana", "Uva", "Abacaxi"]

for(let[pos,listaFrutas] of listaFrutas.entries()){
    // Entries retorna o par de cada elemento do vetor, ou seja, a posição e a fruta 
    console.log(`Posição ${pos} e fruta ${listaFrutas}`)
}

//Seperando os itens em uma lista
let produtos = "Celular, Notebook, TV, Tablet, Headset"
// O split divide a string e forma uma lista a partir do limite, no caso abaixo da vírgula
let ListaProdutos = produtos.split(',')
for(let produtos of ListaProdutos){
    console.log(produtos)
}

// Percorrendo uma string como uma lista (lista de caracteres)
let palavra = "SENAI"
for(let letra of palavra){
    console.log(letra)
}