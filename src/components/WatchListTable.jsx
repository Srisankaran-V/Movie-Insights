import React from 'react'

const WatchListTable = ({ watchlist}) => {
    
  return (
    <>
        <tr>
            <td className='flex items-center px-5 py-4'>

                <img src={`https://image.tmdb.org/t/p/original/${watchlist.poster_path}`} className='w-[16vh] h-[11vh]'/>
                
                <div className='mx-4'>{watchlist.title}</div>

            </td>
            <td>{watchlist.vote_average}</td>
            <td>{watchlist.popularity}</td>
            <td>Action</td>
            <td className='text-red-500'>delete</td>
        
        </tr>
    </>
  )
}

export default WatchListTable