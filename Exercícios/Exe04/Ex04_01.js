const prompt = require('prompt-sync')()

let numero = Number(prompt("Escreva um número de 1 a 7: "))

switch(true){
    case numero == 1:
        console.log("Domingo")
        break;

    case numero == 2:
        console.log("Segunda-feira")
        break;
    
    case numero == 3:
        console.log("Terça-feira")
        break;
    
    case numero == 4:
        console.log("Quarta-feira")
        break;
    
    case numero == 5:
        console.log("Quinta-feira")
        break;

     case numero == 6:
        console.log("Sexta-feira")
        break;

    case numero == 7:
         console.log("Domingo")
        break;
    default:
    console.log("Número Inválido")
}

// É possível criar uma variável e apenas dar um valor para ela dentro dos case´s