let carros = "Gol;Corsa;Palio;Monza;Fusca" // <---- variável simples!!!

let lista = carros.split(";")
for(let[posicao,carro] of lista.entries()){
    console.log(`A posição ${posicao}: ${carro}`)
}