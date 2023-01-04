import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import MyPagination from '../components/MyPagination';
import { SetMovies } from '../store/Actions/SetMovies';


export default function MoviesList() {
  const [movies, setmovies] = useState([])
  const [Mname, setMname] = useState('');
  const [searchmode, setsearchmode] = useState(false);
  const [change, setchange] = useState([])

  let dispatch = useDispatch()                //to dispatch action

  let mymovies = useSelector((state) => state.allmovies.list)          /// it take callback function when called take all object state

  useEffect(() => {    ///  mounting

    dispatch(SetMovies(1))   // we call dispatch fun and pass it setmovies action 

  },);

  useEffect(() => {          //  updata
  }, [movies, change]);

  function ischange(e) {
    setchange([...change, e])
  }

  function getmoviebypage(pgno) {
    setsearchmode(false)
    dispatch(SetMovies(pgno))

  }
  function backtoall(e) {
    e.preventDefault();
    setsearchmode(true);
    getmoviebypage(1);
  }

  function getname(e) {
    setMname(e.target.value)
  }

  // function search(e) {
  //   e.preventDefault();
  //   setsearchmode(true)
  //   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=${Mname}`).then(
  //     res => {
  //       setmovies(res.data.results)
  //       console.log(res.data.results)

  //     }
  //   )
  //   console.log(e)
  // }

  return (
    <>
      <h1 className='m-3' style={{ textAlign: "center" }}> Movies List</h1>

      <div className="container">

        <div class="input-group mb-3">
          {/* <form className='col-10' onSubmit={(e) => { search(e) }}>
            <input type="text" value={Mname} name='Mname' onChangeCapture={(e) => getname(e)} class="form-control" placeholder="Movie name ..."
              aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary mt-2" type="submit">Search</button>
            </div>
          </form> */}


        </div> <button className='btn btn-outline-dark' style={{ visibility: searchmode === false ? "hidden" : "visible" }} onClick={(e) => backtoall(e)} > Back To All Movies</button>
        <div className='row'>

          {
            mymovies.map(movie => {
              return (<>
                <MovieCard changed={(e) => ischange(e)} isfav={false} key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} />
              </>
              )
            })
          }
        </div>
        <div className='col-12 p-5'>
          <MyPagination hide={searchmode} onmove={(e) => getmoviebypage(e)} />
        </div>
      </div>

    </>)
}
