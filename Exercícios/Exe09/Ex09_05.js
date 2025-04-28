
function Senha(nr){
    let senha = 0
    for(let i = 0; i < nr; i++){
    numeroSorteado = Math.floor(Math.random() * 100) + 1
    senha += String (numeroSorteado)

    }
    console.log(senha)

}
Senha(5)