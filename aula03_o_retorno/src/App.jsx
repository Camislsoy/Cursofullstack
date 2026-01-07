import React from 'react'
import Adicao from './components/Adicao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import Subtracao from './components/Subtracao'
import PrecisoEstudar from './components/PrecisoEstudar'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometros from './components/MilhasParaQuilometros'
import Livro from './components/Livro'
import ListaDeLivros from './components/ListaDeLivros'



const App = () => {

const lista = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 }
  ];

  return (
    <div>

    <Adicao  num1={10} num2={5}/>
    <Multiplicacao num1={25} num2={5} />
    <Divisao num1={50} num2={5}/>
    <Subtracao num1={66} num2={5}/>
    <PrecisoEstudar nomeDaTecnologia={"JAVA"}/>
    <RenderizandoComFuncoes/>
    <TrabalhandoComImagens/>
    <CelsiusParaFahrenheit temperaturaCelsius = {25}/>
    <FahrenheitParaCelsius temperaturaFahrenheit={86}/>
    <QuilometroParaMilhas quilomentro={10}/>
    <MilhasParaQuilometros milhas ={20}/> 
    <Livro titulo = "programando com JS" autor= "Camila Sousa" ano={2025}/> 
    <ListaDeLivros livros={lista}/>
    </div>
  )
}

export default App