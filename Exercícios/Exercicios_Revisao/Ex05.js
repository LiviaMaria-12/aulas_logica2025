const prompt = require('prompt-sync')()

let sexo = String(prompt("Digite seu sexo (M ou F): "))

if( sexo == "M"){
    console.log("Masculino!")
}else if(sexo == "F"){
    console.log("Feminino!")
}else{
    console.log("Sexo Inválido!")
}