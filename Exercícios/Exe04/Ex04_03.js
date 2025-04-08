const prompt = require('prompt-sync')()

let mes = parseInt(prompt("Digite um número de um mês: "))

switch(true){
    case mes == 1:
    console.log(`O número ${mes} corresponde ao mês de Janeiro`)
    break

    case mes == 2:
    console.log(`O número ${mes} corresponde ao mês de Fevereiro`)
    break

    case mes == 3:
    console.log(`O número ${mes} corresponde ao mês de Março`)
    break

    case mes == 4:
    console.log(`O número ${mes} corresponde ao mês de Abril`)
    break

    case mes == 5:
    console.log(`O número ${mes} corresponde ao mês de Maio`)
    break

    case mes == 6:
    console.log(`O número ${mes} corresponde ao mês de Junho`)
    break

    case mes == 7:
    console.log(`O número ${mes} corresponde ao mês de Julho`)
    break

    case mes == 8:
    console.log(`O número ${mes} corresponde ao mês de Agosto`)
    break

    case mes == 9:
    console.log(`O número ${mes} corresponde ao mês de Setembro`)
    break

    case mes == 10:
    console.log(`O número ${mes} corresponde ao mês de Outubro`)
    break

    case mes == 11:
    console.log(`O número ${mes} corresponde ao mês de Novembro`)
    break

    case mes == 12:
    console.log(`O número ${mes} corresponde ao mês de Dezembro`)
    break

default: 
console.log("Número Inválido")
}