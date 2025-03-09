import React from 'react'
import { genres } from '../utilities/genres.js'

const WatchListTable = ({ watchlist, removeFromWatchList}) => {
  
  let genreids = watchlist.genre_ids;
  if(genreids.length > 3){
    genreids = genreids.slice(0,3);
  }
  

    
  genres[watchlist.genre_ids[0]]
  return (
    <>
        <tr>
            <td className='flex items-center px-5 py-4'>

                <img src={`https://image.tmdb.org/t/p/original/${watchlist.poster_path}`} className='w-[16vh] h-[11vh]'/>
                
                <div className='mx-4'>{watchlist.title}</div>

            </td>
            <td>{watchlist.vote_average}</td>
            <td>{watchlist.popularity}</td>
            <td>{genreids.map((genreid)=>(
                <div className='inline-block p-1 bg-gray-500 m-1 rounded-lg text-white '>{genres[genreid]}</div>
            ))}</td>
            <td className='text-red-500 hover:cursor-pointer' >
              <div onClick={()=>removeFromWatchList(watchlist)}>delete</div>
            </td>
        
        </tr>
    </>
  )
}

export default WatchListTable