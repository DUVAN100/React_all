import React, { useEffect, useState } from "react";
import Edit from "./Edit";

const ListMovies = ({listState,setListSate}) => {
  //const [listState, setListSate] = useState([]);
  const [edit, setEdit] = useState(0)
  
  useEffect(() => {
    console.log("component of list movies loaded");
    receiveMovies();
  }, []);
  const receiveMovies = () => {
    let movies = JSON.parse(localStorage.getItem("Movies"));
    setListSate(movies);
    return movies 
  };
  const deleteMovie =(id) => {
        //receiver movies saved
        let moviesSaved = receiveMovies();
        //filter this movies for delete the array the chosen
        let newArrayMovies = moviesSaved.filter(movie => (movie.id) !== parseInt(id)); 
        console.log(moviesSaved, newArrayMovies)
        //Actualizar estado de listado
        setListSate(newArrayMovies); 
        //Update LocalSotrage
        localStorage.setItem("Movies", JSON.stringify(newArrayMovies));	
  }
  return (
    <>
    {listState != null ? 
      listState.map(movie => {
        return (
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <button className="edit" onClick={() => {setEdit(movie.id)}}>Edit</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
            {/*Form of edit*/}
            {edit === movie.id && (
             <Edit 
                  movie={movie} 
                  receiveMovies={receiveMovies} 
                  setEdit={setEdit} 
                  setListSate={setListSate}/>
            )}

          </article>
        );
      })
      : <h1 style={{margin: "10px"}}>No movies found at this time</h1> 
    }
    </>
  );
};

export default ListMovies;
