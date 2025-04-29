function NOTAS(nr1, nr2, nr3, nr4){
    let media = (nr1 + nr2 + nr3 + nr4) / 4
    if(media > 7){
        console.log(`Média: ${media} - APROVADO!`)
    }else if(media <= 7 && media > 5){
        console.log(`Média: ${media} - RECUPERAÇÃO!`)
    }else{
        console.log(`Média: ${media} - REPROVADO!`)
    }
}

NOTAS(10, 10, 9, 9)