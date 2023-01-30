import React from 'react'
import PropTypes from "prop-types"

export const ThreeComponent = ({name, age, records}) => {
  return (
    <div className='container'>
        <h1>Comunication between components</h1>
        <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{records.group}</li>

        </ul>
    </div>
  )
}

ThreeComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    records: PropTypes.object
}
