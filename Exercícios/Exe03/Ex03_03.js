const prompt = require('prompt-sync')()

let mes = prompt("Digite o nome de um mês: ")

if( mes == "janeiro" ) {
    console.log(`O mês ${mes} tem 31 dias`)
}else if ( mes == "fevereiro" ){
    console.log(`O mês ${mes} tem 28 dias`)
}else if (mes == "março") {
    console.log(`O mês ${mes} tem 31 dias`)
}else if (mes == "abril") {
    console.log(`O mês ${mes} tem 30 dias`) 
}else if (mes == "maio") {
    console.log(`O mês ${mes} tem 31 dias`)
}else if (mes == "junho") {
    console.log(`O mês ${mes} tem 30 dias`)
}else if ( mes == "julho" ){
    console.log(`O mês ${mes} tem 31 dias`)
}else if (mes == "agosto") {
    console.log(`O mês ${mes} tem 30 dias`)
}else if (mes == "setembro") {
    console.log(`O mês ${mes} tem 31 dias`) 
}else if (mes == "outubro") {
    console.log(`O mês ${mes} tem 30 dias`)
}else if (mes == "novembro") {
    console.log(`O mês ${mes} tem 30 dias`)
}else{
    console.log(`O mês ${mes} tem 31 dias`)
}