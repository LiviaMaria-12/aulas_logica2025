// Declarando um novo vetor
// Reconheço que é um vetor pelo uso dos colchetes 
let listaVazia = []
console.log(listaVazia)

// Declarando uma lista de números
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])

// Declarando uma lista de strings
let nomes = ["Ana", "João", "Maria"]
console.log(nomes)

// Declarando uma lista mista
let listaMista = [1, "dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["Coca-Cola", "Cachorro-Quente"],
    [5.0, 10.0]
]
console.log(listaComLista)

// Alterando valores da lista 
let frutas = ["Maça", "Pera", "Uva", "Abacaxi"]
console.log(frutas)
// A função Push adiciona um novo elemento no vetor 
frutas.push("Laranja") 
console.log(frutas)

// O Spread adiciona um novo elemento no vetor também
frutas = [...frutas, "Banana"]
console.log(frutas)

// A função Splice adiciona um novo elemento no vetor, mas em uma posição específica a partir de um valor no índice
frutas.splice(2, 0, 'Morango')
// 2 é a posição que desejamos, e 0 é o índice 
console.log(frutas)

// Excluindo item na lista
frutas.splice(3,1) // a partir da posição 1, a função exclui a terceira posição - excluindo pelo índice
console.log(frutas)

// Excluindo o primeiro item da lista 
frutas.shift()

// Excluindo último item da lista
frutas.pop()
console.log(frutas)

// Acessar item da lista
console.log(frutas[3]) // acesso a partir da posição específica 
console.log(frutas.slice(0,4)) // a partir da posição 0, até 4
console.log(frutas.slice(1)) // a partir da posição 1 

// Mostrando lista
console.log(frutas.slice(-1)) // mostra apenas o última item da lista 
console.log(frutas.length) // mostra o total de item da lista 

// Ordenar itens da lista 
console.log(frutas)
frutas.sort() // ordenar a lista de forma crescente
console.log(frutas)
frutas.reverse() // ordarnar a lista de forma decrescente
console.log(frutas)