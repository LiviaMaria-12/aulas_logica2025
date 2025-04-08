const prompt = require('prompt-sync')()

let numero1 = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite um número: "))

if( numero1 == numero2 ){
    console.log(`Os números que você escreveu são iguais!`)
}else{
    console.log(`Os números que você escreveu são diferentes!`)
}