const prompt = require('prompt-sync')()

let anoatual = Number(prompt("Digite o ano atual que você está: "))
let anonascimento = Number(prompt("Digite seu ano de nascimento: "))
let idade = anoatual - anonascimento
if( idade <= 10) {
    console.log("Criança")

}else if( idade >= 11 && idade <= 17 ) {
    console.log("Adolescente")

}else if ( idade >= 18 && idade <= 59 ){
    console.log("Adulto")

}else{ (idade >= 60) // não precisa especificar, porque apenas sobrará esta última opção
    console.log("Idoso")
}
