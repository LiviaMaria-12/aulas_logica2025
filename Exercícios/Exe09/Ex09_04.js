
function Divisão(nr1, nr2){
    if(nr2 == 0){
        console.log("Erro: Divisão por zero não é possível.")
        return
    }
    let resultado = nr1 / nr2
    console.log(`O resultado da divisão de ${nr1} / ${nr2} = ${resultado}`)
}
Divisão(14,7)
Divisão(9,3)
Divisão(12,3)