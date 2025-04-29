const prompt = require('prompt-sync')()

let valorHora = Number(prompt("Digite quanto você ganha por hora: "))
let horasMes = Number(prompt("Digite quantas horas você trabalha por mês: "))
let salario = valorHora * horasMes

console.log(`Você ganha R$${salario} por mês`)