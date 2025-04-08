const prompt = require('prompt-sync')()

let temp = Number(prompt("Digite a temperatura em graus °C:" ))

if( temp < 15 ) {
    console.log(`O clima está frio!`)
}else if ( temp >= 15 && temp <= 25 ){
    console.log(`O clima está agradável!`)
}else if ( temp <= 26 && temp <= 35 ) {
    console.log(`O clima está quente!`)
}else{ 
    console.log("O clima está muito quente!") 
}