import React from 'react'
import HoookContador from './components/HoookContador'
import HookDecremento from './components/HookDecremento'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>

      <HoookContador/>
      <HookDecremento/>
      <TodoList/>
    </div>
  )
}

export default App