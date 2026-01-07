import React from 'react'
import { useState } from 'react'

const HoookContador = () => {
  const [contador,setContador]= useState(1)
  
  
  
  
    return (
    <div>
        <button>Incrementar Contador</button>
    </div>
  )
}

export default HoookContador