import React from 'react'
import { useEffect, useState } from 'react'

const movies = () => {

    useEffect(() => {   
        fetch('http://localhost:8000/movies')
            .then(res=>{
                res.json()
            })
            .then((data)=>{
                console.log(data);
            })
    },[]);

  return (
    <div className="movies">
        
    </div>
  )
}

export default movies
