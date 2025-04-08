const prompt = require('prompt-sync')()

let nota1 = Number(prompt("Digite a primeiro nota:  "))
let nota2 = Number(prompt("Digite a segunda nota:  "))
let media = (nota1 + nota2) / 2
if(media >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado!") // Sempre é bom deixar bem claro para o usuário 
}