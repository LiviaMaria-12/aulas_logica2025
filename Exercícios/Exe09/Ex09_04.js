
function Multiplicação(nr1, nr2, operacao){
    if(operacao == '+' ){
        console.log(`${nr1 + nr2}`)

    }if(operacao == "-"){
        console.log(`${nr1 - nr2}`)
        
    }if(operacao == "*"){
        console.log(`${nr1 * nr2}`)

    }if(operacao == "**"){
        console.log(`${nr1 ** nr2}`)
        
    }if(operacao == "/"){
        console.log(`${nr1 / nr2}`)
    }
}
console.log(Multiplicação(2, 3, "+"))
console.log(Multiplicação(8, 8, "-"))
console.log(Multiplicação(6, 3, "*"))