const prompt = require('prompt-sync')()

let alc = Number(prompt("Digite o preço do álcool, em litro: "))
let gas = Number(prompt("Digite o preço do gasolina, em litro: "))
let precoal = 0.7 * alc
let precogas = 0.7 * gas 

if( precoal > precogas) {
    console.log(`Abasteça com gasolina `)
}else{
    console.log("Abasteça com álcool")
}
// Não compreendi como seria a resolução das continhas, então provavelmente está errado!