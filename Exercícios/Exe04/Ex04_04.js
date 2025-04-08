const prompt = require('prompt-sync')()

let mes = prompt("Digite o nome de um mês: ").toLocaleUpperCase()

switch(true){
    case mes == "Janeiro":
    console.log(`O mês de ${mes} tem 31 dias`)
    break

    case mes == "Fevereiro":
        console.log(`O mês de ${mes} tem 28 dias, ou 29 dias em ano bissexto`)
        break

    case mes == "Março":
    console.log(`O mês de ${mes} tem 31 dias`)
    break

    case mes == "Abril":
        console.log(`O mês de ${mes} tem 30 dias`)
        break

    case mes == "Maio":
    console.log(`O mês de ${mes} tem 30 dias`)
    break

    case mes == "Junho":
        console.log(`O mês de ${mes} tem 31 dias`)
        break
    
    case mes == "Julho":
    console.log(`O mês de ${mes} tem 30 dias`)
    break

    case mes == "Agosto":
        console.log(`O mês de ${mes} tem 31 dias`)
        break

    case mes == "Setembro":
    console.log(`O mês de ${mes} tem 30 dias`)
    break

    case mes == "Outubro":
        console.log(`O mês de ${mes} tem 31 dias`)
        break

    case mes == "Novembro":
    console.log(`O mês de ${mes} tem 30 dias`)
    break

    case mes == "Dezembro":
        console.log(`O mês de ${mes} tem 31 dias`)
        break
}

// Ou simplesmente separar os meses que têm 31 dias
// Exemplo:
// let mes = prompt("Digite o mês: ").toLocaleUpperCase() - Transforma as primeiras letras em maiúscula
// switch(mes){
//  case "Janeiro":
//  case "Março":
//  case "Maio":
//  case "Julho":
// ...
// console.log(`O mês ${mes} tem 31 dias)

// case "Abril":
// case "Junho":
// ...
//console.log(´O mês ${mes} tem 31 dias`)

// case "Fevereiro":
// console.log(´O mês ${mes} tem 28 dias`)

//default:
// console.log("Mês inválido ")
