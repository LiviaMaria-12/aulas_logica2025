// Confundi e fiz a atividade 4 sendo a atividade 5 - fiz os exercícios que estavam no Class, e a atividade 4 não estava lá

function Calcular(num1, num2, operador){
    if(operador === "+"){
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    }else if(operador === "-"){
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
}else if(operador === "*"){
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
}else if(operador === "/"){
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}else if(operador === "**"){
    console.log(`${num1} ** ${num2} = ${num1 ** num2}`)
}else{
    console.log("Operador inválido!")
    return
}
}
 Calcular(3,3,"+")
 Calcular(3,3,"-")
 Calcular(3,3,"*")
 Calcular(3,3,"/")
 Calcular(3,3,"**")
 Calcular(3,3,";")