/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function MovieDetails() {
  
   const [movie , setmovie] = useState({})
   const params = useParams();

    useEffect(() => {
     
     axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=672cdfe6607c2166acf2affdb81ae188`).then(
         res => {
              setmovie(res.data)
         }
     )
     
    },);
    
 return(<>
 <div className='container mt-3'>
  <div className='col-10 border border rounded p-3 card'>
  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-thumbnail" width={"300"} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
    <p className="card-text"> {movie.overview} </p>
  </div>
  <div className="card-body">
  <Link to={'/movies-list'} className='btn btn-secondary'> Back To Movies</Link>
  </div>
</div>
</div>
  </>)
}
