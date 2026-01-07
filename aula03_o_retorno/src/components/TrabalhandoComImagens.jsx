import React from 'react'
import ImagemDeAsset from '../assets/Imagem.png'

const TrabalhandoComImagens = () => {
  return (
    <div>
     
      <img src='dogcat.jpeg' alt="Imagem dog e cat" />

      <img src={ImagemDeAsset} alt="Imagem importada" />
    </div>
  )
}

export default TrabalhandoComImagens
