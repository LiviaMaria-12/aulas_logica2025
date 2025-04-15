const prompt = require('prompt-sync')()

// Criando nossa primeira função
function Cabecalho(texto){
    console.log("----------------------")
    console.log      (  texto)
    console.log("----------------------")
}

// Criando função de saudação
function Saudacao(){
    let nome = prompt("Digite o seu nome: ")

    console.log(`${nome}, tenha um bom dia!`)
}

// Chamando a função
// Passando o parâmetro junto com a função
Cabecalho("SESI/SENAI")
// Posso declarar uma variável e passá-la como parâmetro para função
let escola = "Sesi 025"
Saudacao()
Cabecalho(escola)

// Criei a função soma que irá receber dois valores como parâmetros
// A partir desses valores, realizará o cálculo e mostrará o resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
soma(5, 6)
soma(8, 9)
soma(8, 18)

// Exercício 1
function Parimpar(n1){
    if(n1 % 2 == 0){
        console.log(`O número ${n1} é par`)
    }else{
        console.log(`O número ${n1} é ímpar`)
    }
}
Parimpar(3)
Parimpar(6)

// Exercício 2 - função com retorno do resultado
// O cálculo é realizado e é retornado para a chamada da função
function Media(n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado) // calcula e mostra apenas para mim, não exibe
}
console.log(Media(6, 8))
// Armazenei o retorno da função em uma variável
let valor = Media(9, 7)
// Utilizei o retorno da função para escrever na tela
console.log(valor)
// Utilizei a variável que recebeu o retorno da função para chamar função par ou ímpar, passando o valor como parâmetro
Parimpar(valor)