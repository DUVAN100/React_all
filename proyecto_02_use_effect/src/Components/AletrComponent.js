import React, { useEffect } from 'react'

const AletrComponent = () => {
  useEffect(() => {
    //cuando el componente se monta 
    alert("The component AletrComponent it loading")
    //cuando el componente se desmonta
    return() =>{
        alert("Componente desmontado!!");
    }
        
    
  }, [])//se ejecuta solo una vez porque se le paso un array
    
  return (
    <div>
        <hr/>
        <h3>Hi Victor ¿How are you?</h3>
        <button onClick={e =>{
            alert("Welcome")
        }}>Show alert</button>
    </div>
  )
}

export default AletrComponent