import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Articles from '../components/Articles'
import Contacto from '../components/Contacto'
import Inicio from '../components/Inicio'
import Error  from '../components/Error'
import '../App.css';
import Person from '../components/Person'
import ControlPanel from '../components/ControlPanel'
import HomePanel from '../components/panel/HomePanel'
import CreateArticles from '../components/panel/CreateArticles'
import ManageUsers from '../components/panel/ManageUsers'
import About from '../components/panel/About'
const RourtesMain = () => {
  return (
    <BrowserRouter>
      <h1>Head</h1>
      <br/>
      <nav>
        <ul className='list-menu'>
          <li>
            <NavLink 
                    to="/home"
                    className={({isActive})=>isActive ? "active": "desactive"}
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
                    to="/contact"
                    className={({isActive})=>isActive ? "active": "desactive"}
            >Contacts</NavLink>
          </li>
          <li>
            <NavLink 
                    to="/articles"
                    className={({isActive})=>isActive ? "active": "desactive"}
            >Articles</NavLink>
          </li>
          <li>
            <NavLink 
                    to="/person"
                    className={({isActive})=>isActive ? "active": "desactive"}
            >Person</NavLink>
          </li>
          <li>
            <NavLink 
                    to="/panel"
                    className={({isActive})=>isActive ? "active": "desactive"}
            >Control Panel</NavLink>
          </li>
        </ul>
      </nav>
      <section className='content-main'> 
        <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/home' element={<Inicio/>}/>
              <Route path='/contact' element={<Contacto/>}/>
              <Route path='/articles' element={<Articles/>}/>
              <Route path='/person/:name' element={<Person/>}/>
              <Route path='/person/:name/:lastName' element={<Person/>}/>
              <Route path='/person' element={<Person/>}/>
              <Route path='/redirection' element={<Navigate to=""/>}/>
              <Route path='/panel/*' element={<ControlPanel/>}>
                <Route path='home-Panel' element={<HomePanel/>}/>
                <Route path='create-articles' element={<CreateArticles/>}/>
                <Route path='manage-users' element={<ManageUsers/>}/>
                <Route path='about' element={<About/>}/>
              </Route>
              <Route path='*' element={<Error/>}/>
        </Routes>
      </section>

    </BrowserRouter>
  )
}

export default RourtesMain
