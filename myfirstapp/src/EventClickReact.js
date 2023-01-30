import React from 'react'

const EventClickReact = () => {
    const hassalido = (e, accion)=>{
        alert(`Has salido${accion} del cuadro`)
    }
    
    const hasEntrado = ()=>{
        alert("Has Entrado al cuadro")
    }
    const estasDentro = e =>{
        console.log("estas dentro del input introduce tu nombre")
    }
    const estasFuera = e =>{
        console.log("Estas fuera")
    }
  return (
    <div className='container'>
        <h1>Events in react</h1>
        <button onClick={()=>{
            //console.log("Hola, soy un event Click")
            alert("hellow, am a event click")
        }}>Dame Click</button>
        <p>
            <input type="text" 
                onFocus={estasDentro} 
                onBlur={estasFuera} 
                placeholder= "Type your name.."/>
        </p>
        
        <div id='caja' 
            onMouseEnter={e => hasEntrado(e, "Entrado")}
            onMouseLeave={e => hassalido(e, "Salido")}>
            <p>Pass the mouse for about me!!</p>
        </div>
    </div>
  )
}

export default EventClickReact
