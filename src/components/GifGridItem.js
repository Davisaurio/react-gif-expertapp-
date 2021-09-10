import React from 'react'

export const GifGridItem = ({ id, title, url}) => {
    
    return (
       <div className="card animate__animated animate__wobble animate__rotateIn">
         <img src={url} alt ={title}/>
         <p >{title} </p>
        </div>
    )
}
