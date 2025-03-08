import React from 'react'

const Card = ({poster_path, title}) => {
    // console.log("PosterPath");
  return (
    <>
    <div>
        <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl m-5 hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage :  `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        <div className='text-black font-bold text-center bg-gray-600 text-white '>{title}</div>
        </div>  
        
        
    </div>
    </>
  )
}

export default Card