const mediaParaAprovacao= 7.0

const notas = [7.5, 6.0, 7.5]

const calcularMedia =  (notas) =>{
    return ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(1)
}

console.log(`Nota 1: ${notas[0]}`)
console.log(`Nota 1: ${notas[1]}`)
console.log(`Nota 1: ${notas[2]}`)
console.log (`A média foi: ${calcularMedia(notas)}`)


if (calcularMedia (notas) >= mediaParaAprovacao ){
    console.log ("APROVADO!")

}else {

    console.log ("REPROVADO!")
}