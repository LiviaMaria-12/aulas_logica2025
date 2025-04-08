const prompt = require('prompt-sync')()

let velo = Number(prompt("Digite a velocidade do carro, em km/h: "))

if( velo > 80 ){
    console.log(` Você foi multado!`)
    let multa = (velo - 80) * 7
    console.log(`O valor da multa é de R$ ${multa}`)
}