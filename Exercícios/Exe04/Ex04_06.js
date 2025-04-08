const prompt = require('prompt-sync')() 

let salario = Number(prompt("Digite o seu salário: "))
let salario2mil = salario * 12 / 100
let salario4mil = salario * 10 / 100
let salariomais = salario * 8 / 100


switch(true){
    case salario <= 2000:
    console.log(`Seu novo salário será de R$ ${salario2mil + salario}`)
    break

    case salario <= 4000:
    console.log(`Seu novo salário será de R$ ${salario4mil + salario}`)
    break

    case salario > 4000:
    console.log(`Seu novo salário será de R$ ${salariomais + salario}`)

}
// Outra forma de fazer:
// let salario = Number(prompt("Digite o seu salário: "))
// switch(true){
// case salario < 2000:
// salario = salario (salario * 0.12)
// console.log(`Salário reajustado: ${salario}`)

// case salario >= 2000 && salario < 4000
// salario = salario (salario * 0.10)
// console.log(`Salário reajustado: ${salario}`)

// case salario > 4000:
// salario = salario (salario * 0.08)
// console.log(`Salário reajustado: ${salario}`)

// default:
// console.log("Operação inválida!")


