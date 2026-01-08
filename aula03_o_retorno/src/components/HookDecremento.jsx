import React from 'react'
import { useState } from 'react'

const HookDecremento = () => {

    const [contador, setContador] = useState(1)

    function decrementarContador (){
        setContador(contador-1)

    }


  return (
    <div>
        <button onClick={decrementarContador}>Decrementar contador</button>
        <p>Contador inicia decrementando: {contador}</p>
    </div>
  )
}

export default HookDecremento