import React from "react";

const SecondComponent = () =>{
    const  books = ["Harry Potter", "Juego de tronos", "Clean Code"]
    return (
        <div className="second-Component">
            <h1>List of books</h1>
            {books.length >= 1 ?( 
                <ul>
                    {
                        books.map((book, index )=>{
                            return <ol key={index} >{book}</ol>
                        })            
                    }
                </ul>)
                :(<p>No hay libros disponibles</p>)
            }   
        </div>
)}
export default SecondComponent