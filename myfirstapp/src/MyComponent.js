import React from "react";

const MyComponent =  () =>{    
    let name = "Duvan";
    let age = "19"; 
    return( 
    <>
        <p> this my first component!!</p>
            <h2>Component create</h2>
            <h3>Dates the user:</h3>
            <ul>
                <ol>Name: <strong>{name}</strong></ol>
                <ol>Age: {age}</ol>
            </ul>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>
        </ul>
    </>
);}
export default MyComponent