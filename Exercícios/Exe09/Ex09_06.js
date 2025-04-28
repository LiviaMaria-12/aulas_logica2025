
function GerarSenha(tamanhoSenha){
    let caracteres = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz!@#$%&*+="
    let senha = ""

    for(let i = 0; i < tamanhoSenha; i++){
        let letraSorteada = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[letraSorteada]
}
return senha
}
console.log(`Senha de 6 caracteres: `, GerarSenha(6))
console.log(`Senha de 6 caracteres: `, GerarSenha(10))