import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';



export default function FavouriteMovies() {
      const movies = useSelector(state => state.favourite);
      const [change , setchange] = useState([])
     

      useEffect(() => { 
        console.log(" item deleted ")    
      }, [movies,change]);

      
   function ischange(e){
    setchange([...change , e])
   }
  return <div className='container'>
     <h1 className='m-3'> Favourite Movies </h1> 
     <div className='row'>

     {
    movies.map((item)=>{
        return (<MovieCard changed={(e) => ischange(e)} isfav={true} id={item.id} poster_path={item.img} title={item.title}/>)
    })
     }
     </div>
    
  </div>;
}
