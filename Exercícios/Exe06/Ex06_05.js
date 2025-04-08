const prompt = require('prompt-sync')()

let idade = 0
let sexo 
let mediaMas = 0
let qtdMas = 0
let qtdFem = 0
let mediaFem = 0

for(let i = 0; i < 10; i++){
    idade = Number(prompt("Digite a sua idade: "))
    sexo = prompt(" Digite seu sexo (M ou F): ").toUpperCase() // deixar tudo maiúsculo

    if(sexo == "M"){
        mediaMas += idade 
    qtdMas++
    }else{
        mediaFem += idade
        qtdFem++
    }
}
console.log(`A média da idade dos homens é: ${mediaMas / qtdMas}`)
console.log(`A média da idade das mulheres é: ${mediaFem / qtdFem}`)
