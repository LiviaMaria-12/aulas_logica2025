let saldo = 2000

function Depositar(quant){
    saldo = saldo + quant
}
function Sacar(quant2){
    saldo = saldo - quant2
}

function Consultar(nr){
    while( nr != 4)
        if(nr == 1){
            console.log(`Valor depositado: ${Depositar(1000)}`)
        }else if(nr == 2){
            console.log(`Valor sacado: ${Sacar(500)}`)
        }else if(nr == 3){
            console.log(` Saldo atual: ${saldo}`)
        }else{
            console.log("Valor inválido")
            break
        }

}
Consultar(1)