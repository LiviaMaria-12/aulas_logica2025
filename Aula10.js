const prompt = require('prompt-sync')()

// Estrutura condicional alinhada

let idade = Number(prompt("Digite sua idade: "))

if(idade >= 18 && idade <= 70){
    console.log("Voto obrigatório!")
}
else
    if(idade < 16){
        console.log("Você não pode votar!")
    }else
        if(idade >= 16 || idade > 70){
        console.log("Voto facultativo!")
    }

// Switch Case - Estrutura de controle de fluxo para tomar decisões com base no valor de uma variável 

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let op = prompt("Escolha a operação (+, -, *, /, **): ")

//Testar o valor da variável se é true
switch(op){
    // caso a variável op for verdadeira, testará cada condição. Caso essa condição seja igual a um dos cases exucutará o bloco em questão
    case "+":
        console.log(`Resultado: ${n1 + n2}`)
        break // encerra o case, interrrompe
    case "-":
        console.log(`Resultado: ${n1 - n2}`)
        break 
    case "*":
        console.log(`Resultado: ${n1 * n2}`)
        break
    case "/":
        console.log(`Resultado: ${n1 / n2}`)
        break
    case "**":
        console.log(`Resultado: ${n1 ** n2}`)
        break
    default:
        console.log("Operação inválida!")
}

// Verificar qual letra é igual
let letra = prompt("Digite uma letra: ").toUpperCase // convertendo todas as letras para maiúscula
// Quando usamos switch (variável), o switch compara exatamente o valor da variável com os cases definidos
switch(letra){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Vogal")
    break;
default:
console.log("Consoante")
}

// Convertendo a nota de número para letra
let nota = parseInt(prompt("Digite a nota do aluno: "))
// O switch true verificar quais expressões dentro do case retornam true (verdade), ou seja, comparamos as expressões boleanas.
switch(true){
    case nota >= 90:
        console.log("Nota A")
        break;
    case nota >= 80:
        console.log("Nota B")
        break;
    case nota >= 70:
        console.log("Nota C")
        break
    case nota > 60:
         console.log("Nota D")
         break
    default:
        console.log("Nota E")
}