import { BrowserRouter,Routes, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import Loginform from "./pages/Loginform";
import Registerform from "./pages/Registerform";
import FavouriteMovies from "./pages/FavouriteMovies";
import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from "react";
import { LanguageContext } from "./context/context";

function App() {
  const [language , setlanguage] = useState("en");
  return (
  <LanguageContext.Provider value={{language,setlanguage}}>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/movies-favourite' element={<FavouriteMovies/>} ></Route>
    <Route path='/movies-list' element={<MoviesList/>} ></Route>
    <Route path='/' element={<MoviesList/>} ></Route>
    <Route path='/login' element={<Loginform />} ></Route>
    <Route path='/register' element={<Registerform/>} ></Route>
    <Route path='/movie-details/:id' element={<MovieDetails/>} ></Route>
  </Routes>
  </BrowserRouter>
  </LanguageContext.Provider>
  );
}

export default App;
