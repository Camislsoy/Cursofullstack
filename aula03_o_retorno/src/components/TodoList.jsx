import React from 'react'
import { useState } from 'react'

const TodoList = () => {
const [tarefas,setTarefas]= useState ([])
const [novaTarefa, setNovaTarefa] = useState("")

function adicionarTarefa(){
    setTarefas([...tarefas, novaTarefa])
}

  return (
    <div>
        <h1>Desafio do useState: TodoList</h1>
        <input
            type="text"
            placeholder='Digite uma nova tarefa'
            value={novaTarefa}
            onChange={(e)=>setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Nova Tarefa</button>
    <di>
        {
            tarefas.map((tarefa) => (
                <p>{tarefa}</p>
            ))
        }
    </di>
    
    
    </div>
  )
}

export default TodoList