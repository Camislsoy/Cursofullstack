import React from 'react'

const MilhasParaQuilometros = ({milhas}) => {


    const converterParaQuilometro = (mi) => {
        return mi / 0.621371
    }
  return (
    <div>
        <p>{milhas} milhas são iguais a {converterParaQuilometro(milhas).toFixed(2)} quilometro.</p>
    </div>
  )
}

export default MilhasParaQuilometros