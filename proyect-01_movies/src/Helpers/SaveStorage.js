export const SaveLocalStorage = (key,objecToSave) =>{
    //conseguimos los elemento guardados en el LocalStorage
    let elements = JSON.parse(localStorage.getItem(key))
    if(Array.isArray(elements)){
        //add a element the array
        elements.push(objecToSave)
    }else{
        //create a array  width the new objecToSave or the element
        elements = [objecToSave]
    }
    //save in the localStorage
    localStorage.setItem(key, JSON.stringify(elements)); 
    console.log(elements )
    //return the object saved
    return objecToSave 
} 