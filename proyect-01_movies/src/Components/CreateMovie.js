import React,{useState} from 'react'
import { SaveLocalStorage } from '../Helpers/SaveStorage';

const CreateMovie = ({setListSate}) => {
    const title = "Add neew moive";
    const [movie, setMovie] = useState({
        title:'',
        description:''
    });
    const collectDataForm = e =>{
        //Evita el funcionamiento de los formularios en este caso que no recarge la pagina
        e.preventDefault();
        //collect data of form
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        //creamos un objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        setMovie(movie)  
        //update list 
        setListSate(elements =>{
            return[...elements,movie];
        })
        SaveLocalStorage("Movies",movie)
    }
    return (    
        <>
        <div className="add">
            <h3 className="title">{title}</h3>
            <strong>
                {(movie.title && movie.description) && "you are created the movie: "+ title}
            </strong>
            <form onSubmit={collectDataForm}>
                <input 
                        type="text" 
                        id="title"
                        name='title'  
                        placeholder="Title" />
                <textarea 
                        id="description" 
                        name='description'
                        placeholder="Descriptión"></textarea>
                <input 
                        type="submit" 
                        id="save" 
                        value="Save" />
            </form>
        </div>
        </>
    )
}
export default CreateMovie
