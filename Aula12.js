// Estrutura de repetição FOR
// Criando nosso primeiro for

for(let i = 0; i < 100; i++){
        console.log(i)
}

const prompt = require('prompt-sync')()
//Entregando os notebooks por ordem
console.log("Entregando Notebooks")

for(let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o número ${nr}? `)
    let presente = prompt(`O(A) ${nome} veio para a escola? (S para sim, N para não): `)

    
    if(presente == "S"){
        console.log(`Pegar notebook ${nr}`)
        console.log(`Pegar mouse ${nr}`)
        console.log(`Pegar fonte ${nr}`)
        console.log(`Levar notebook até  ${nome}`)
    }
    else{
        console.log(`Não pegar notebook!`)
    }
}
