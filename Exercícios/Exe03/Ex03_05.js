const prompt = require('prompt-sync')() 

let salario = Number(prompt("Digite o seu salário: "))

if( salario <= 2000) {
    let calculo = (salario * 12) / 100
    let novosalario = calculo + salario
    console.log(`Seu novo salário será de R$ ${novosalario}`)


}else if(salario > 2000 && salario <= 4000 ) {
    let calculo = (salario * 10) / 100
    let novosalario = calculo + salario 
    console.log(`Seu novo salário será de R$ ${novosalario}`)

}else{ (salario > 4000 ) 
    let calculo = (salario * 8) / 100
    let novosalario = calculo + salario 
    console.log(`Seu novo salário será de R$ ${novosalario}`)
}