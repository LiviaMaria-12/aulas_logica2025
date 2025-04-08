const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número: "))
let numero1 = Number(prompt("Digite outro número: "))
if(numero > numero1){
    console.log(`O número ${numero} é maior que ${numero1}`)
}else{
    console.log(`O número ${numero} é menor que ${numero1}`)
}
