const prompt = require('prompt-sync')()

let hora = Number(prompt("Digite o horário atual, de 0 ás 23: "))

if( hora >= 5 && hora <= 11 ) {
    console.log(`Bom dia!!!`)
}else if ( hora >= 12 && hora <= 17 ){
    console.log(`Boa tarde!!!`)
}else if ( hora >= 18 && hora <= 23 ) {
    console.log(`Boa noite!!!`)
}else{ 
    console.log("Boa madrugada!!!") 
}
