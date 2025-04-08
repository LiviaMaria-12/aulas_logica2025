const prompt = require('prompt-sync')()

let salario = Number(prompt("Digite quantos reais você conseguiu adquirir com as vendas: "))

if( salario > 5000 ){
    let comissao = salario * 5 / 100
    console.log(`Você receberá R$ ${comissao} de comissão`)
}else{
    let comissao = salario * 3 / 100 // pode reatribuir um valor da variável dentro do bloco de código. Ela torná-se uma variável local
    console.log(`Você receberá R$ ${comissao} de comissão`)
}