import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../App.css';

const ControlPanel = () => {
  return (
    <div>
        <h1>Control Panel</h1>
        <h3>this is the control Control Panel page</h3>
        <nav>
            <ul className='list-menu'>
                <h1>Choose a option</h1>
                 <li>
                    <NavLink
                        to='/panel/home-panel'
                        className="Aactive"
                    >home panel</NavLink>
                 </li>
                 <li>
                    <NavLink 
                        to='/panel/create-articles'
                        className="Aactive"
                    >Create Articles</NavLink>
                 </li>
                 <li>
                    <NavLink
                        to='/panel/manage-users'
                        className="Aactive"
                    >users management</NavLink>
                 </li>
                 <li>
                    <NavLink 
                        to='/panel/about'
                        className="Aactive"
                    >About</NavLink>
                 </li>
            </ul>
        </nav>
        <div>
            {/*I want push here the components  of the routes*/}
            <Outlet/>
        </div>
        <div>
          <h1>Footer</h1>
        </div>
    </div>
  )
}

export default ControlPanel
