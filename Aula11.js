const prompt = require('prompt-sync')()

//Trabalhando com laços de repetição (while)

//Executar o laço x vezes
let contador = 1

//Irá repetir enquanto a condição for verdadeira, ou seja, será verdade enquanto o contador for menor ou igual a 5
while(contador <= 5){
    console.log(`O contador é ${contador}`)
// Incrementando a variável, ou seja, adicionando valor a ela para continuar o processo até que a condição seja atingida
contador = contador + 1
}
console.log("FIM!")

let senha_senai = "12345"

while(true){
    let senha = prompt("Digite a senha: ")
if(senha_senai == senha){
        console.log("Você hackeou a senha!")
    break;
    }else if(senha == 'Desisto'){
    break;
}
}

// Exercício dos produtos 

let soma = 0
let qtd = 0

while(true){
    let valor = Number(prompt("Digite o valor do produto (0 para encerrar): "))
    if(valor == 0){
        break
    }
else{
        soma = soma + valor 
    qtd++
}
}
console.log(`Foram informados ${qtd} produtos `)

console.log(`O valor total dos produtos R$ ${soma.toFixed(2)}`) // to fixed para ter apenas uma certa quant de casas após a vírgula de um números



// OUTRA FORMA DE RESOLVER
let soma2 = 0
let qtd2 = 0
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt("Digite o valor do produto: "))

        soma2 = soma2 + valor 
    qtd2++
    encerrar = prompt("Deseja continuar? (Digite 'SUB-TOTAL' se quer encerrar) ")
}

console.log(`Foram informados ${qtd2} produtos `)

console.log(`O valor total dos produtos R$ ${soma2.toFixed(2)}`) 

// JOGO 🤩

console.log("#################################")
console.log("❤️      JOGO DA IMITAÇÃO      ❤️")
console.log("#################################")

let nrSorteado = Math.floor(Math.random() * 100 + 1) // gera um nº aleatório de 0 a 1, por isso, * por 100 e + 1. O Floor arredonda o valor

let acertou = false 

while(!acertou){
    const chute = parseInt(prompt("❤️Digite um número entre 1 e 100 para adivinhar "))
    if(chute > nrSorteado){
        console.log(`Você chutou ${chute}, tente novamente um número 👎`)
    }
    else if(chute < nrSorteado){
        console.log(`Você chutou ${chute}, tente novamente um número ☝️`)
    }
    else if(chute == nrSorteado){
        console.log(`Você chutou ${chute}. Parabéns 😎🤩, você acertou!!!`)
        acertou = true
    }
}
console.log("❤️FIM❤️")