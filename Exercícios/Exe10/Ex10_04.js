let saldo = 0

// Criar as funções
function depositar(valorDeposito){
    saldo += valorDeposito
}

function sacar(valorSaque){
    saldo -= valorSaque
}

function mostrarSaldo(){
    console.log(`Seu saldo: R$ ${saldo}`)
}

// MENU INTERATIVO
function CaixaEletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0

    while(opcao != 4){
        console.log(" ====== Caixa Eletrônico ======")
        console.log("[1] - Depositar")
        console.log("[2] - Sacar")
        console.log("[3] - Mostrar Saldo")
        console.log("[4] - Sair")

        opcao = Number(prompt("Escolha uma opção: "))

    switch(opcao){
        case 1:
            let valorDeposito = Number(prompt("Digite o valor a ser depositado: "))
            depositar(valorDeposito)
            break
        case 2:
            let valorSaque = Number(prompt("Digite o valor a ser sacado: "))
            sacar(valorSaque)
            break
        case 3:
            mostrarSaldo()
            break
        case 4:
            console.log("Obrigada por usar o BancoBarreto!")
            break
        default:
        console.log("Opção Inválida")

    }
    }
}

CaixaEletronico()