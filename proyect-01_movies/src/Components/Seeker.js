import React, { useState } from "react"

const Seeker = ({listState,setListState}) => {
    const [search, setsearchState] = useState("");
    const [Notfound, setNotfound] = useState(false)
    const searchMovie = (e) =>{ 
        //create state  and update it
        setsearchState(e.target.value);
        //Filter for search coincidenbces
        let moviesFound = listState.filter(movie =>{
             return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        });
        if (search.length <=1 || moviesFound <=0) {
            moviesFound = JSON.parse(localStorage.getItem("Movies"));
            setNotfound(true)
        }else{
            setNotfound(false)
        }
        setListState(moviesFound);
    }    
    return (
        <>
              <div className="search">
                <h3 className="title">Seeker: {search}</h3>
                {(Notfound== true && search.length >1) && (
                    <spam className='not-found'>Not found</spam>)
                }
                
                <form>
                    <input type="text" 
                            id="search_field"
                            name="search"
                            autoComplete='off'
                            onChange={searchMovie}  
                            />
                </form>
            </div>
       
        </>
    )
}

export default Seeker
