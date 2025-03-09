import React from 'react'
import WatchListTable from './WatchListTable'

const WatchList = ({watchlists}) => {
  console.log(watchlists);
  return (
    <>
      <div className='flex flex-wrap justify-center m-4'>
        <div className='flex font-bold items-center text-white bg-blue-500 rounded-lg mx-4 w-[9rem] h-[3rem] justify-center'>Actions</div>
        <div className='flex font-bold items-center text-white bg-gray-400 rounded-lg mx-4 w-[9rem] h-[3rem] justify-center'>Actions</div>
      
      </div>

      <div className='flex justify-center my-5 '>
        <input placeholder="  search movies" type='text' className='w-[20rem] h-[2.5rem] bg-gray-200'/>
      </div>
      <div className='rounded-lg border border-gray-300 m-8'>
          <table className='w-full text-center'>
            <thead className='border-b-2'>
                <tr>
                <th>Movie </th>
                <th>Rating</th>
                <th>Popularity</th>
                <th>Genre</th>
                
                </tr>
            </thead>
            <tbody>
              {watchlists.map((watchlist)=>(

                <WatchListTable  watchlist={watchlist}/>
              ))}
          </tbody>
          </table>
      </div>
      
    </>
  )
}

export default WatchList