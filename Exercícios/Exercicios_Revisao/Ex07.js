const prompt = require('prompt-sync')()

let valorHora = Number(prompt("Digite quanto você ganha por hora: "))
let horasMes = Number(prompt("Quantas horas você trabalha por mês: "))

let salarioBruto = valorHora * horasMes

let ImpostoRenda = salarioBruto * 0.11
let INSS = salarioBruto * 0.08
let Sind = salarioBruto * 0.05

let descontos = ImpostoRenda + INSS + Sind

let salarioLiq = salarioBruto - descontos

console.log(`Seu salário Bruto: R$${salarioBruto}`)
console.log(`Desconto do Imposto de Renda: -R$${ImpostoRenda}`)
console.log(`Desconto do INSS: -R$${INSS}`)
console.log(`Desconto do Sindicato: -R$${Sind}`)
console.log(`Seu salário líquido é de R$${salarioLiq}`)
