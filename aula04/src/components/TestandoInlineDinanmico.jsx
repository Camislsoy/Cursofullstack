import React from 'react'

const TestandoInlineDinanmico = () => {
  
    const ligado= true
  
  
  
    return (
    <div
    style={{
        backgroundColor: ligado ? 'green' : 'red',
        color: ligado? 'yellow': 'black',
        padding:    '12px',
        borderRadius: '10px',
        width:' fit-content'

    }}
    >
        Status {ligado? 'Ligado': 'Desligado!' }
            </div>
  )
}

export default TestandoInlineDinanmico