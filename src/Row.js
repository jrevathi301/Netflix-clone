import React, { useEffect, useState } from 'react'
import axios from './axios'; 
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original"
const Row = ({title,fetchUrl,isLargeRow}) => {
    const[Movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
  return (
    <div>
        <h2 className='title'>{title}</h2>
        <div className='row_posters'>
        {Movies.map((movie)=>{
            return<img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}/>
        })}
        </div>
    </div>
  )
}

export default Row