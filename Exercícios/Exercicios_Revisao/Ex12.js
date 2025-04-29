let ListaNum = ['0', '1', '2', '3', '4', '5']
let PAR = []
let IMPAR = []

for(let i = 0; i <= ListaNum.length; i++){
    if(ListaNum[i] % 2 == 0){
        PAR.push(ListaNum[i])
    }else{
        IMPAR.push(ListaNum[i])
    }
}
console.log(PAR)
console.log(IMPAR)