import React from 'react'

const Card = ({movie, watchlists, addToWatchList, removeFromWatchList, poster_path, title}) => {
    
    let isContains = (movie)=>{
      for(let i=0;i<watchlists.length;i++){
        if(watchlists[i].id==movie.id){
          return true;
        }
          
      }
      return false;
    }

  return (
    <>
    <div>
        <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl m-5 hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage :  `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
          {!isContains(movie)?
            (<div onClick={()=>(addToWatchList(movie))}className='flex m-4 justify-center bg-white w-8 h-8 rounded-full items-center'>
              &#x2661; 
            </div> ) 
            :
            (<div onClick={()=>(removeFromWatchList(movie))}className='flex m-4 justify-center bg-white w-8 h-8 rounded-full items-center'>
              &hearts;
            </div> )
          } 
          
          
          
          <div className=' w-full text-center bg-gray-500 text-white '>{title}</div>
          
        </div>  
        
        
    </div>
    </>
  )
}

export default Card