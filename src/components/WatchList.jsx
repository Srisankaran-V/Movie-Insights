
import React ,{useState} from 'react'
import WatchListTable from './WatchListTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const WatchList = ({watchlists, setWatchLists}) => {
  console.log(watchlists);
  const [searchMovie, setSearchMovie] = useState('');

  let handleSearch = (e)=>{
    setSearchMovie(e.target.value);
  }
  let handleSortInc = ()=>{
    let sortedInc = watchlists.sort((a,b)=>{
      return a.vote_average - b.vote_average;
    })
    setWatchLists([...sortedInc])
  }
  let handleSortDec = ()=>{
    let sortedDec = watchlists.sort((a,b)=>{
      return b.vote_average - a.vote_average;
    })
    setWatchLists([...sortedDec])
  }
  return (
    <>
      <div className='flex flex-wrap justify-center m-4'>
        <div className='flex font-bold items-center text-white bg-blue-500 rounded-lg mx-4 w-[9rem] h-[3rem] justify-center'>Actions</div>
        <div className='flex font-bold items-center text-white bg-gray-400 rounded-lg mx-4 w-[9rem] h-[3rem] justify-center'>Actions</div>
      
      </div>

      <div className='flex justify-center my-5 '>
        <input onChange={handleSearch} value={searchMovie} placeholder="search movies" type='text' className='w-[20rem] h-[2.5rem] bg-gray-200 p-4'/>
      </div>
      <div className='rounded-lg border border-gray-300 m-8'>
          <table className='w-full text-center'>
            <thead className='border-b-2'>
                <tr>
                <th>Movie </th>
                <th >
                  <div className='flex flex-wrap justify-center'>
                    <div onClick={handleSortInc}><FontAwesomeIcon icon={faArrowDown}/></div>
                    <div className='mx-2'>Rating</div>
                    <div onClick={handleSortDec}><FontAwesomeIcon icon={faArrowUp}/></div>
                  </div>
                </th>
                <th >
                  <div className='flex flex-wrap justify-center'>
                    <div onClick={handleSortInc}><FontAwesomeIcon icon={faArrowDown}/></div>
                    <div className='mx-2'>Popularity</div>
                    <div onClick={handleSortDec}><FontAwesomeIcon icon={faArrowUp}/></div>
                  </div>
                </th>
                
                <th>Genre</th>
                
                </tr>
            </thead>
            <tbody>
              {watchlists.filter((movie)=>{
                return movie.title.toLowerCase().includes(searchMovie.toLocaleLowerCase())
              }).map((watchlist)=>(

                <WatchListTable  watchlist={watchlist}/>
              ))}
          </tbody>
          </table>
      </div>
      
    </>
  )
}

export default WatchList