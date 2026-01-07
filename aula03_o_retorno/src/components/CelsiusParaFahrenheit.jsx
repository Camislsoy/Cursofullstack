import React from 'react'

const CelsiusParaFahrenheit = ({temperaturaCelsius}) => {
   
    const conversorDeTemperatura = (temperatura) => {
return (temperatura *9/5)+32
}
  return (
    <div>
        <p>   A temperatura de {temperaturaCelsius} °C é igual {conversorDeTemperatura(temperaturaCelsius)} °F</p>
    </div>
  )
}

export default CelsiusParaFahrenheit