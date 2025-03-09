import React from 'react'
import Banner from './Banner'
import Cards from './Cards'

const Movies = ({watchlists,addToWatchList, removeFromWatchList}) => {
  return (
    <div>
        <Banner/>
        <Cards watchlists={watchlists} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList}/>

        
    </div>
  )
}

export default Movies