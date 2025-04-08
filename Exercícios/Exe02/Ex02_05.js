const prompt = require('prompt-sync')()

let ano = Number(prompt("Digite o ano de seu nascimento: "))

if( ano <= 2007 ){ // ou --> if( ( 2025 - ano) >= 18a){
    console.log(`Você é maior de idade`)
}else{
    console.log(`Você é menor de idade`)
}