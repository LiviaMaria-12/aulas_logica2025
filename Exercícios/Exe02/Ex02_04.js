const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite um número: "))

if(numero > 0 ){
    console.log(`O número ${numero} é positivo`)
}else{
    console.log(`O número ${numero} é negativo`)
}