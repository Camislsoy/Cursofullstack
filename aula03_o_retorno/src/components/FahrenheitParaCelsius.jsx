import React from 'react'

const FahrenheitParaCelsius = ({temperaturaFahrenheit}) => {

    const conversorDeTemperatura = (temperatura) =>{
        return (temperatura -32 ) * 5/9
    }


  return (
    <div>
        <p>   A temperatura de {temperaturaFahrenheit} °F é igual {conversorDeTemperatura(temperaturaFahrenheit)} °C</p>

    </div>
  )
}

export default FahrenheitParaCelsius