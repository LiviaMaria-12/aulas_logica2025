let ListaGlobal = ["Bárbara", "Gabriela", "Lara", "Livia", "Nicoly"]

function Adicionar(nome){
    ListaGlobal.push(nome)
}

function Retirar(nome){
    let posicao = ListaGlobal.indexOf(nome)
// Quando o indexOf não encontra o elemento, ele retorna - 1
    if(posicao != -1){
        ListaGlobal.splice(posicao, 1)
    }else{
        console.log("Nome não encontrado!")
    }
}

Adicionar("Isadora")
console.log(`Lista atualizada: ${ListaGlobal}`)
Retirar(`Livia`)
console.log(`Lista atualizada: ${ListaGlobal}`)