let filmes = ["HP e a Pedra Filosofal", "HP e a Câmara Secreta", "HP e o Prisioneiro de Askaban", "HP e o Cálice de Fogo", "HP e o Enigma do Príncipe", "HP e as Relíquias da Morte part 01", "HP e as Relíquias da Morte part 02"]

//Exibindo 1º item da lista
console.log(filmes[0])

// Exibindo o item da posição 4
console.log(filmes[3])

// Substituindo último item e exibindo
filmes[7] = "A Donzela"
console.log(filmes)

// Inserindo novo item no final da lista e exibindo
filmes.push("As Branquelas")
console.log(filmes)

// Inserindo item na posição 5 e exibindo
filmes.splice(4, 0, 'A Culpa É das Estrelas')
console.log(filmes)

//Excluindo primeiro item e exibindo
filmes.shift()
console.log(filmes)

//Excluindo último filme e exibindo
filmes.pop()
console.log(filmes)

// Exibindo 3 primeiros filmes
console.log(filmes.slice(0,3)) 

// Exibindo últimos 4 filmes
console.log(filmes.slice(3,7)) 

// Exibindo quantidade de filmes
console.log(filmes.length)

// Ordenando por ordem decrescente e exibindo
filmes.reverse()
console.log(filmes)