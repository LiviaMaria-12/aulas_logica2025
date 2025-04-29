const prompt = require('prompt-sync')()

let sexo = prompt("Digite seu sexo: (M ou F): ")
let altura = Number(prompt("Digite sua altura: "))

if(sexo == "M"){
    let pesoIdeal = (72.7 * altura) - 58 
    console.log(`Seu peso ideal seria ${pesoIdeal.toFixed(2)}KG`)
}else if(sexo == "F"){
    let pesoIdeal2 = (62.1 * altura) - 44.7
    console.log(`Seu peso ideal seria ${pesoIdeal2.toFixed(2)}KG`)
}else{
    console.log("Sexo Inválido.")
}