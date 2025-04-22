
function FormatarData(dia, mes, ano){
    let data = `${dia}/${mes}/${ano}`
    return(data)
}

let valorRetornado = FormatarData('22', '04', '2025')
console.log(valorRetornado)