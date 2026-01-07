let pessoa = {
    nome:"Gaia",
    cpf:"123.123.123-12",
    cidade:"João Pessoa"
}

const notas= [10, 6.5, 8, 9]

console.log(pessoa.nome)
console.log(pessoa.cpf)
console.log(pessoa.cidade)

console.log(` A primeira nota é ${notas[0]}`)
console.log(` A segunda nota é ${notas[1]}`)
console.log(` A terceira nota é ${notas[2]}`)
console.log(` A quarta nota é ${notas[3]}`)

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length

console.log(`A media do aluno(a) é: ${media.toFixed(1)}`)

const notaSelecionada = notas[Math.floor(Math.random()*notas.length)]

console.log(`A nota sorteada foi ${notaSelecionada}`)

const converteNotas = (convercao) =>{
    return (notaSelecionada*10)
}

console.log(`A  notas sorteada foi ${notaSelecionada} e covertida para a escala de 0-100 é: ${converteNotas(notaSelecionada)}`)