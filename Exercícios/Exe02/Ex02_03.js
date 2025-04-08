const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite um número: "))
let valor = numero % 2

if(valor == 0 ){ // ou colocar a operação matemática entre () no if
    console.log(`O número ${numero} é par`)
}else{
    console.log(`O número ${numero} é ímpar`)
}
