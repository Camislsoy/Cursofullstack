import React from 'react'
import Livro from './Livro'

const ListaDeLivros = (props) => {
  return (
    <div>
        <h2>Lista de Livros</h2>
{props.livros.map((livro,index) => (

<Livro
key={index}
titulo={livro.titulo}
autor={livro.autor}
ano={livro.ano}
/>




))}
 </div>
  )
}

export default ListaDeLivros