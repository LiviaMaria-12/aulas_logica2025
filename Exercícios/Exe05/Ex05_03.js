const prompt = require('prompt-sync')()

let entrada 
let qtdPar = 0
let somaPar = 0
let qtdImpar = 0
let somaImpar = 0

console.log(`Digite os números (0 para encerrar): `)
while(true){
    entrada = parseFloat(prompt("Número: "))

    if(entrada === 0){ // 3 zeros para garantir se o tipo de dado está certo
        break // encerra o loop
    }
    if(entrada % 2 == 0){
        somaPar = entrada + somaPar
        qtdPar++    
    }
    else{
        somaImpar = entrada + somaImpar
        qtdImpar++
    }
}
console.log(`Somas dos pares digitados: ${somaPar}. Quantidade de pares: ${qtdPar}`)
console.log(`Somas dos ímpares digitados: ${somaImpar}. Quantidade de ímpares: ${qtdImpar}`)