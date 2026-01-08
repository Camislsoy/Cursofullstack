import React from 'react'
import { useState } from 'react'

const HoookContador = () => {
  const [contador,setContador]= useState(1)
  
  
  function incrementarContador(){
    setContador(contador+1)
  }
  
    return (
    <div>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <p>O valor do contador está em: {contador}</p>
    </div>
  )
}

export default HoookContador