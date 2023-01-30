import React, { useState } from "react";
import CreateMovie from "./Components/CreateMovie";
import ListMovies from "./Components/ListMovies";
import Seeker from "./Components/Seeker";
import FooterPage from "./Components/FooterPage";

function App() {
    const [listState, setListState] = useState([]);
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>      
            <h1>MysMovies</h1>
        </header>
        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Main</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>
        {/*Contenido principal*/}
        <section id="content" className="content">
            {/*aqui van las peliculas*/}
            <ListMovies listState={listState} setListSate={setListState}/>
        </section>
        {/*Barra lateral*/}
        <aside className="lateral">
            <Seeker listState={listState} setListSate={setListState}/>
            <CreateMovie setListSate={setListState}/>
        </aside>
        {/*Pie de página*/}
        <FooterPage />
    </div>
  );
}
export default App;
