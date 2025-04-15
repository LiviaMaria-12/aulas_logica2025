const prompt = require('prompt-sync')()

let palavra = prompt("Digite uma palavra: ")
let vogais = 0

let ListaVogais = ["a", "e", "i", "o", "u"]

console.log(palavra)
for(let vogal of ListaVogais){
    if(palavra.includes(vogal)){
        console.log(vogal)
        vogais++
    }
}
console.log(`Quantª de vogais: ${vogais}`)