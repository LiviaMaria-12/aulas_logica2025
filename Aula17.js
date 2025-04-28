// Variáveis Globais e Locais

function NomeEscola(){
    escola = "SESI"
    console.log(escola)
    // Declarando uma variável local
    var cidade = "Andradina"
}

// Essa variável é uma variável global, porque ela pode ser acessada em qualquer parte de código
let escola = "SENAI"
console.log(escola)

NomeEscola()
let cidade = "Mirandópolis"
console.log(cidade)



var x = 10 // Variável Global
console.log("Fora da função", x)

function minhaFuncao(){
    let x = 0; //Variável local
    x = x + 1;
    console.log("Dentro da função", x)
}

minhaFuncao()
console.log("Fora da função de novo", x)
/////////////////////////////////////////////////////////
var x = 10 // Variável Global
console.log("Fora da função", x)

function minhaFuncao(){
    // Estamos usando a variável global 
    let x = 0; //Variável local
    x = x + 1;
    console.log("Dentro da função", x)
}

minhaFuncao()
x += 1
console.log("Fora da função de novo", x)