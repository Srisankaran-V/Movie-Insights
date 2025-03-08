import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from './Pagination'

const Cards = () => {
    const [movies, setMovies] = useState([]);
    const [page_no, setPage_no] = useState(1);



    function pageIncrement(){
        if(page_no>=1){
            setPage_no(page_no+1);
        }
    }
    function pageDecrement(){
        if(page_no>1){
            setPage_no(page_no-1);
        }
    }

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=38c0ad02e3992d269ae16ad55a1ed8ff&include_adult=false&include_video=false&language=en-US&page=${page_no}&sort_by=popularity.desc`).then((res)=>{
            setMovies(res.data.results);  
           
        });
    },[page_no])
    
  return (
    <div className='p-5'>
        <div className='text-center text-2xl font-bold '> Trending Movies</div>
        <div className='flex flex-wrap justify-center '>
            {movies.map((movie) => (
                <Card poster_path={movie.poster_path} title={movie.title}/>
            ))}
            
            
            
            
        </div>
        <div className='bg-gray-400 m-15 h-[5vh] flex justify-center items-center'>
            <Pagination page_no={page_no} pageIncrement={pageIncrement} pageDecrement={pageDecrement} />
        </div>
        
    </div>
  )
}

export default Cards