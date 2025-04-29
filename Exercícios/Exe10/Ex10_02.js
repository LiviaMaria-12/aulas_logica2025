let ValorEuro = 6.46
let ValorDolar = 5.69

function Conversao(valor){
    console.log(`O valor ${valor} em euros é: ${valor / ValorEuro.toFixed(2)}`)
    console.log(`O valor ${valor} em dolár é: ${valor / ValorDolar.toFixed(2)}`)
}

Conversao(10)