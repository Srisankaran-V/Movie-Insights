import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Movies from "./components/Movies"
import WatchList from "./components/WatchList"


function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
