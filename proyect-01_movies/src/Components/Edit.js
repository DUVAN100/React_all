import React from 'react'

export const Edit = ({movie, receiveMovies, setEdit, setListSate}) => {
  const title_component = "Form Edit";
  const saveEdition= (e, id)=>{
    e.preventDefault();
    let target = e.target;
    //get event of movie to update
    const moviesStored = receiveMovies();
    console.log(moviesStored)
    // search index 
    const index = moviesStored.findIndex(movie => movie.id === id);
    //create object width the id of that index  
    let movieActuality = {
      id, 
      title : target.title.value,
      description: target.description.value
    }
    moviesStored[index] = movieActuality;
    //save data in LOcalStorage 
    localStorage.setItem("Movies", JSON.stringify(moviesStored))
    //actuality state
    setListSate(moviesStored)
    setEdit(0)
  }
    return (
      <div className='edit-form'>
        <h3 className='title'>{title_component}: {movie.title}</h3>
        <form onSubmit={e => saveEdition(e, movie.id)}> 
            <input  type="text"
                    name="title"
                    className='edit_form'
                    defaultValue={movie.title}/>
            <br/>
            <textarea 
                    name='description'
                    className='edit_form'
                    defaultValue={movie.description}/>
            <br/>
            <input  type="submit"  className='editar' value="Edit"/>
        </form>    
      </div>
  )
}

export default Edit
