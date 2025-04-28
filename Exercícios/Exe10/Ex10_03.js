let ListaGlobal = ["Bárbara", "Gabriela", "Lara", "Livia", "Nicoly"]

function Adicionar(nome){
    ListaGlobal.push(`${nome}`)
    console.log(`Lista atualizada: ${ListaGlobal}`)
}

function Retirar(posicaoexcluir){
    ListaGlobal.splice(0,`${posicaoexcluir}`)
    console.log(`Lista atualizada: ${ListaGlobal}`)
}

Adicionar("Ana")
Retirar(1)