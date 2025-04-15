let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let letra = "J"
for( let mes of meses){
    if(mes.includes(letra)){ // Dá para usar o startwith
        console.log(mes)
    }
}