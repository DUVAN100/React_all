import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {
            characters.map((item, index)=>(
                <div key={index} className='col mb-4'>
                    <div className='card' style={{maxWidth: "200px"}}>
                        <img src={item.image} alt='Img'/>
                        <div className='card-body'>
                            <h4 className='card-title'>{item.name}</h4>
                            <h6>{item.status}</h6>
                            <h6>{item.species}</h6>
                            <h6>{item.gender}</h6>
                            <h6>{item.location.name}</h6>
                        </div>

                    </div>
                </div>
            ))
               
        }
 
      
    </div>
  )
}

export default Characters
