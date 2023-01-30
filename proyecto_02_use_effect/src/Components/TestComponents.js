import React, {useState, useEffect} from 'react'
import "../App.css"
import AletrComponent from './AletrComponent';

const TestComponents = () => {

    const [user, setuser] = useState("Duvan Vivas");
    const [date, setdate] = useState("01-01-2002");
    const [Count, setCount] = useState(0)
    const changeDate = e =>{
        setdate(Date.now());
    }
    const updateUser = e =>{
        setuser(e.target.value);
    }
    //solo se ejecuta una vez
    useEffect(() => {
        console.log("has cargado el componente");
    },[date])
    useEffect(() => {
        setCount(Count + 1);
        console.log("you are update the user"+ Count);
    },[user])
    return (
        <div>
            <h1>Use of useEffect</h1>
            <strong  className={Count < 10 ? 'label' : 'label-green' }>
                {user}
            </strong>
            <strong >
                {date}
            </strong>
            <p className='p'>
                <input
                    onChange={updateUser} 
                    type="text"
                    placeholder='Change name'/>
                    <button onClick={changeDate}>Change date</button>
            </p>
            {user == "Victor" && <AletrComponent/>}
        </div>
    )
}

export default TestComponents

