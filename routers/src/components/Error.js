import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>Not Foun </h1>
        <h2>404</h2>
        <h3>This page no exists</h3>
        <Link 
              to="/inicio"
              className='Back'
        >Back</Link>
        <div>
          <h1>Footer</h1>
        </div>
    </div>
  )
}

export default Error
