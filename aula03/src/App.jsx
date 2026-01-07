import React from 'react'
import Adicao from './components/Adicao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao  num1={2} num2={5}/>
      <Multiplicacao num1={5} num2={9} />
      <Subtracao num1={6} num2={9} />
      <Divisao num1={15} num2={3} />
    </div>
  )
}

export default App