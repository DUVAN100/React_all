import React, {useState} from 'react';
import '../App.css'
import PropTypes from "prop-types"


const CountYears = ({year}) => {
    const [yearNow, setyearNow] = useState(year) 
    const next = e =>{
        setyearNow(yearNow + 1)
    }
    const back = e =>{
        let operation = yearNow - 1
        setyearNow(operation)
    }
    const changeYear = e =>{
        let data = parseInt(e.target.value);
        if(Number.isInteger(data)){
            setyearNow(data)
        }else{
            setyearNow(year)
        }
        
    }
    return (
    <div>
        <h2>Exercises with events and useState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p>
            <button onClick={next}>Next</button>
            &nbsp;
            <button onClick={back}>Back</button>
        </p>
        <p>Change year:
            <input
                onChange={changeYear}
                type = "text"
                placeholder='Change the year'/>
        </p>
    </div>
  )
}

export default CountYears

CountYears.propTypes={
    year: PropTypes.number.isRequired
}
