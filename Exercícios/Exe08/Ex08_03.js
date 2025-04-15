let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let letra = "j"
for( let mes of meses){
    if(mes.includes(letra)){
        console.log(mes)
    }
}