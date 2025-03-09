import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"
import { useEffect, useState } from "react"


function App() {

  const [watchlists, setWatchlists] = useState([]);
 

  function addToWatchList(movie){
    let newWatchlist = [...watchlists, movie];
    localStorage.setItem('watchlists', JSON.stringify(newWatchlist));
    setWatchlists(newWatchlist);
    
  }
  let removeFromWatchList = (movie) =>{
    let newWatchlist = watchlists.filter((watchlist)=>{
      return watchlist.id != movie.id;
    })
    setWatchlists(newWatchlist);

  }
  useEffect(()=>{
    let newWatchlist = JSON.parse(localStorage.getItem('watchlists'));
    if(!newWatchlist){
      return;
    }
    setWatchlists(newWatchlist);
  },[])


  // console.log(watchlists);
  // console.log(localStorage.getItem('watchlists'));


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Movies watchlists={watchlists} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList}/>}/>
        <Route path='/watchlist' element={<WatchList watchlists={watchlists}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
