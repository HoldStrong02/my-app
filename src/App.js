import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/navigation/pages/Home"
import About from "../src/components/navigation/pages/About"
import Reviews from "../src/components/navigation/pages/Reviews"
import Navigation from "./components/navigation/Navigation";
import MovieDetails from "./components/movie-details/MovieDetails";


function App() {

    return (
      <BrowserRouter>
      <Navigation/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/home/:id/:title/:description' element={<MovieDetails/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
          </Routes>
      </BrowserRouter>
    )
  
  }
  
  export default App;