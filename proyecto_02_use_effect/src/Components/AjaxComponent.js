import React, { useEffect, useState } from 'react'


const AjaxComponent = () => {
    const [users, setusers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState("")
    //Generic
    const gatUsersStatic = ()=>{
    setusers([
            {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
    ]);
    }
    useEffect(() => {
       // gatUsersStatic();
       //getUsersAjaxPRomise();  
       getUserAjaxAwait();
    }, []);

    //Get Users with Ajax and promise

    const getUsersAjaxPRomise = ()=>{
        fetch("https://reqres.in/api/users?page=1")
        .then(response => response.json())
        .then(finalResult =>{
            setusers(finalResult.data);
        },
        error => {
          console.log(error);    
        })
    }
    //function asyncrona
    const getUserAjaxAwait = () => {
        setTimeout(async()=>{
            try{
                const request = await fetch("https://reqres.in/api/users?page=1");
                const {data} = await request.json();
                setusers(data)
                setLoading(false)
                console.log(data)
            }catch (error){
                console.log(error);
                seterror(error.message);
            }
        }, 2000)
        
    }
    if(error !== ""){
        //when exist a error
        return(
            <div className='errors'>
                {error}
            </div>
        )
    }else if(loading == true){
        //when everything is loading
        return(
            <div className='Loading'>
                Loading datas...
            </div>
        )
    }else if(loading == false && error === ""){
        //When everyting is fine
        return (
            <div>
                <h2>List of users rute AJAX</h2>
                <ol className='users'>
                    {
                        users.map(user =>{
                            console.log(user)
                            return(
                                <li key={user.id}> 
                                    <img src={user.avatar} width= "20"/>
                                    &nbsp;
                                    {user.first_name} {user.last_name}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }



}
export default AjaxComponent
