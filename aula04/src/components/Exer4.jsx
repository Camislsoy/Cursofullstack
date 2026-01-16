import React from 'react'

const Exer4 = () => {
  
  
  const isPrimary = true;
  const isLarge = false;

  
  
    return (
    

    <div style={{
            color:   isPrimary  && isLarge? '#ffffff': 
                     isPrimary && !isLarge ? '#ffffff':
                    !isPrimary && isLarge ? '#000000': '#000002',

            backgroundColor: isPrimary && isLarge? '#555555': 
                             isPrimary && !isLarge? '#22222212':
                            !isPrimary && isLarge? '#777777': '#168587',


            width:   isPrimary && isLarge? '400px' : 
                     isPrimary && !isLarge  ? '200px':
                     !isPrimary && isLarge? '300px':'auto',

            padding: isPrimary && isLarge ? '20px':
             isPrimary && !isLarge ? '10px' : 
             !isPrimary && isLarge ? '15px' : '0px',


    }}
    
    
    
    
    
    >
      
      Este texto serve para teste dos codigos com ternario



    </div>
  )
}

export default Exer4