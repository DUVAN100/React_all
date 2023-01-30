import React, { useState } from 'react'
import "../App.css"

const FormComponent = () => {
    const [user, setuser] = useState({})
    const changeData = e => {
        let nameOfInput = e.target.name;
        setuser(statePrev =>({
            ...statePrev,
            [nameOfInput]: e.target.value
        })
    );
    console.log(user)
}
    const collectDataForm = e =>{
        e.preventDefault();
        let datas = e.target;
        console.log(datas.name.value)
        let user = {
            name: datas.name.value,
            lastName: datas.lastName.value,
            gender: datas.select.value,
            bio: datas.textarea.value
        }

        setuser(user)
        console.log(user)
    }

  return (
    <div>
        <h1>Fomrs width React </h1>
        {user.bio && user.bio.length >= 1 &&
            (
                <div className='info-user'>
                    {user.name} {user.lastName} is a {user.gender} and his biography is this:<p>{user.bio}</p>
                </div>
            )
        }
        <form onSubmit={collectDataForm}>
            <input 
                name='name'
                className='form-control'
                type="text"
                placeholder='Name'
                onChange={changeData}/>
            <br/>
            <input 
                name='lastName'
                className='form-control' 
                type="text"
                placeholder='LAst Name'
                onChange={changeData}/>
            <br/>
            <select name='select' className='form-select'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
            <br/>
            <textarea 
                name='textarea' 
                className='form-control' 
                placeholder='Biographical'
                onChange={changeData}></textarea>
            <br/>
            <input 
                name='send'
                className='input-group-text' 
                type="submit" 
                value="Enviar"/>
        </form>
      
    </div>
  )
}

export default FormComponent
