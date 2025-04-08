const prompt = require('prompt-sync')() // importando biblioteca 

// Exercício 08
let largura = Number(prompt("Digite a largura da parede em metros:"))
let altura = Number(prompt("Digite o comprimento da parede em metros"))
let area = largura * altura 
let quantTinta = area / 2
console.log(`A área desta parede é de ${area} metros². Então, será necessário ${quantTinta} litros de tinta`)