import React from 'react'
import style from './Campanha.module.css'

const Campanha = ({mes}) => {

  function defineMensagem (mesDaCampanha){
    if (mesDaCampanha === "setembro"){
    return "Prevenção ao suicidio"

    }else if (mesDaCampanha ===  "outubro"){
    return "Conscientização sobre cancer de mama"

    }else if (mesDaCampanha === "novembro"){
    return " Novembro Azul conscientização sobre cancer de prostata"
    }
    
  }

  function defineCorDeFundo(mesDaCampanha){
    if (mesDaCampanha === "setembro"){
        return style.setembro
    }else if (mesDaCampanha === "outubro"){
        return style.outubro
    }else if (mesDaCampanha === "novembro"){
        return style.novembro
    }
  }
  
  
    return (
    <div className= {defineCorDeFundo(mes)}>
        {defineMensagem(mes)}


    </div>
  )
}

export default Campanha