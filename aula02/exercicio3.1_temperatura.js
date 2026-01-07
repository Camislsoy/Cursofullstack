const temperaturas = [30,25,24, 23]
console.log(`Essas são as temperaturas armazenadas em Celsius ${temperaturas}`)
 

const temperaturaAleatoria = temperaturas[Math.floor(Math.random()*temperaturas.length)]


const conversorDeTemperatura = (temperaturaCelsius) => {
return (temperaturaCelsius *9/5)+32
}

console.log(`A temperatura aleatória é ${temperaturaAleatoria} °C, que corresponde a ${conversorDeTemperatura(temperaturaAleatoria)} °F`)