import React from 'react'
import Aluno from './components/Aluno'

const App = () => {

  const alunos = [
    {nome: "Camila Lima Sousa", email: "Camila.limasousa@gmail.com", curso: "Ti"},
     {nome: "Camila Lima Sousa", email: "Camila.limasousa@gmail.com", curso: "Ti"},
      {nome: "Camila Lima Sousa", email: "Camila.limasousa@gmail.com", curso: "Ti"}
  ]
  return (
    <div>
      {
        alunos.map((aluno)=>(
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
        ))
      }
    
    </div>
  )
}

export default App