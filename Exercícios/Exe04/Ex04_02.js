const prompt = require('prompt-sync')()

let anoatual = Number(prompt("Digite o ano atual que você está: "))
let anonascimento = Number(prompt("Digite seu ano de nascimento: "))
let idade = anoatual - anonascimento

switch(true){
    case idade < 10:
        console.log("Criança")
        break;
    case idade >= 11 && idade <= 17:
        console.log("Adolescente")
        break;
    case idade >=18 && idade <= 59:
        console.log("Adulto");
        break;
     case idade >= 60:
            console.log("Idoso");
            break;
        default:
        console.log("Idade Inválida");
}