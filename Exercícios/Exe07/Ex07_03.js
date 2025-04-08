const prompt = require('prompt-sync')()

let comidas = []

for(let i = 0; i < 6; i++){
    let comida = prompt(`Digite o nome da comida ${i + 1}: `)
    comidas.push(comida)
}
//Exibindo 1º item da lista
console.log(comidas[0])

// Exibindo o 4º item da lista
console.log(comidas[3])

// Substituindo último item e exibindo
comidas.pop()
comidas.splice(6, 0, 'Carne vermelha')
console.log(comidas)

// Inserindo novo item no final da lista e exibindo
comidas = [...comidas, "Peixe"]
console.log(comidas)

// Inserindo item na posição 5 e exibindo
comidas.splice(4, 0, 'Ovo frito')
console.log(comidas)

//Excluindo primeiro item e exibindo
comidas.shift()
console.log(comidas)

//Excluindo último item e exibindo
comidas.pop()
console.log(comidas)

// Exibindo 3 primeiros itens
console.log(comidas.slice(0,3)) 

// Exibindo últimos 4 itens
console.log(comidas.slice(2,6)) 

// Exibindo quantidade de itens
console.log(comidas.length)

// Ordenando por ordem decrescente e exibindo
comidas.reverse()
console.log(comidas)