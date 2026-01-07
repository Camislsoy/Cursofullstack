import React from 'react'

const Livro = (props) => {
  return (
    <div>

        <p>O titulo do livro é {props.titulo} o autor do livro é {props.autor} no ano {props.ano}</p>
    </div>
  )
}

export default Livro