/* eslint-disable jsx-a11y/anchor-is-valid */
// import { findByPlaceholderText } from '@testing-library/react';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/context';



export  function Navbar (props) {
  const movies = useSelector((state)=> state);
  const {language , setlanguage} = useContext(LanguageContext);
  const [nomovies , setnomovies] = useState(0)
 useEffect(() => {
    
   setnomovies(movies.length)
 }, [movies,]);
 
//  function change(e){
//    props.gchange(e)
//  }
 const changelang = (e)=>{
   console.log("check ");
   setlanguage(language === "en" ? "ar" : "en")
 }
//  let count = useSelector((state) => state.fav.favorites)
//   useEffect(() => {   
//       },
//       [count]);
  return (<>
  <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" ><i class="fas fa-film"></i>

</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/movies-list" aria-current="page"> Movies </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={'/movies-favourite'}>Favourites {nomovies} </Link>
        </li>
        {/* <li className="nav-item">
              <span className="nav-link">
                {Object.keys(count).length}
              </span>
            </li> */}
        <li className="nav-item">
          <a className="nav-link" onClick={(e)=> changelang(e)} >language : {language} </a>
        </li>
      </ul>
      <div className="d-flex nav-item">
      <Link className="nav-link text-light" to='/login'>Login</Link>
      </div>
      <div className="d-flex nav-item">
      <Link className="nav-link text-light" href="#" to="/register"> Register </Link>
      </div>
    </div>
  </div>
</nav> 
  </>);
}
