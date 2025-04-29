const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número: "))

if(num < 0){
    console.log("Este número é negativo!")
}else{
    console.log("Esse número é positivo!")
}