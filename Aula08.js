const prompt = require('prompt-sync')()

let altura = Number(prompt("Digite a sua altura: "))
let peso = Number(prompt("Digite seu peso: "))

let imc = peso / (altura ** 2)
console.log(`Seu imc é de ${imc}`)

if(imc < 18.5 ) {
    console.log(" Abaixo do peso ideal!")

}else if ( imc >= 18.5 && imc < 25 ){
//                 p           q         p e q

    console.log("Peso ideal!")

}else if ( imc >= 25 && imc < 30) {
    console.log(" Sobrepeso ")

}else{ 
    console.log("Obesidade")
}

// Verificar se o triângulo é equilátero ou escaleno 
// Receber lado 01
let lado1 = Number(prompt("Digite o valor do lado 1: "))
let lado2 = Number(prompt("Digite o valor do lado 2: "))
let lado3 = Number(prompt("Digite o valor do lado 3: "))

//Verificar se o triângulo é equilátero (se todos os lados são iguais)
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log(`Triângulo Equilátero?`, eq, `Triângulo Escaleno`, es)

// Exercícios 
let lado4 = Number(prompt("Digite o valor do lado 1: "))
let lado5 = Number(prompt("Digite o valor do lado 2: "))
let lado6 = Number(prompt("Digite o valor do lado 3: "))


if( (lado4 == lado5) && (lado5 == lado6) ){
    console.log(" Triângulo Equilátero!") 
}else{
    console.log(" Triângulo Escaleno ") 
}

// Outro exercício
// Descobrir a quant de horas trabalhadas 
let horas = Number(prompt(" Total de horas trbalhadas: "))
let vendas = Number(prompt(" Total de vendas: "))

//Validar se uma condições foi atendidas 
// Mais de 5000 em vendas ou mais de 40 horas trabalhadas

if(vendas > 5000 || horas > 40){
    console.log(" Tem direito ao bonus")
}
else{
    console.log("Não tem direito ao bonus")
}

// Outro exercício
let letra = prompt("Digite uma letra qualquer: ") // não precisa converter para string
if( letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" ){ // string é entre aspas 
    console.log(`A letra ${letra} é uma vogal`)
}
else{
    console.log(`A letra ${letra} é uma consoante`)
}
