import React from 'react'

const QuilometroParaMilhas = ({ quilomentro}) => {


    const converterParaMilhas = (km) =>{
        return  km * 0.621371
    }
  return (
    <div> {quilomentro} km são {converterParaMilhas(quilomentro).toFixed(2)} milhas. </div>
  )
}

export default QuilometroParaMilhas