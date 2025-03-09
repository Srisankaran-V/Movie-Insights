
import React ,{useEffect, useState} from 'react'
import WatchListTable from './WatchListTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { genres } from '../utilities/genres.js'


const WatchList = ({watchlists, setWatchLists, removeFromWatchList}) => {
  console.log(watchlists);
  const [searchMovie, setSearchMovie] = useState('');
  const [allGenres, setAllGenres] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

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

  let handleGenreColor = (genre)=>{
    setCurrGenre(genre);

  }


  
  useEffect(() => {
    const uniqueGenres = new Set();
  
    watchlists.forEach((watchlist) => {
      watchlist.genre_ids.forEach((id) => uniqueGenres.add(genres[id]));
    });
  
    setAllGenres(["All Genres", ...uniqueGenres]); // Always include "All Genres"
  }, [watchlists]); // Runs only when watchlists change
  
  console.log(allGenres);
  return (
    <>
      <div className='flex flex-wrap justify-center m-4 p-4'>
          <div className='flex flex-wrap justify-center gap-2'>
          {allGenres.map((genre)=>{
             return <div onClick={()=>handleGenreColor(genre)} className={currGenre == genre ? 'flex font-bold items-center text-white bg-blue-500 rounded-lg mx-2  w-[9rem] h-[3rem] justify-center hover:cursor-pointer' : 'flex font-bold items-center text-white bg-gray-500 rounded-lg mx-2  w-[9rem] h-[3rem] justify-center hover:cursor-pointer'}>{genre} </div>
          })
          }</div>

      
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
                if(currGenre == 'All Genres'){
                  return true;
                }
                return movie.genre_ids.some((gen_id) => genres[gen_id] === currGenre);
              }).filter((movie)=>{
                return movie.title.toLowerCase().includes(searchMovie.toLocaleLowerCase())
              }).map((watchlist)=>(

                <WatchListTable  watchlist={watchlist} removeFromWatchList={removeFromWatchList}/>
              ))}
          </tbody>
          </table>
      </div>
      
    </>
  )
}

export default WatchList