import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Person = () => {
  //const {name = "Duvan", lastName= "Vivas"} = useParams();
  const {name, lastName}= useParams();
  const navegate = useNavigate();
  const send = (e)=>{
    e.preventDefault();
    let name = e.target.name.value;
    let lastName = e.target.lastname.value;
    let url = `/person/${name}/${lastName}`;
    navegate(url);
    if(name.length <= 0 && lastName <= 0){
      navegate("/home");
    }else if(name === "contact"){
      navegate("/contact")
    }else{
      navegate(url)
    }
  };
  return (
    <div>
        {!name && <h1>There is no person to show</h1>}
        {name && <h1>Person : {name} {lastName} </h1>}
        <h3>This page Person</h3>
        <form onSubmit={send}>
          <input type="text" name='name'/>
          <br/>
          <input type="text" name="lastname"/>
          <br/>
          <input type='submit' name='send' value="send"/>
        </form>
        <div>
          <h1>Footer</h1>
        </div>
    </div>
  )
}

export default Person
