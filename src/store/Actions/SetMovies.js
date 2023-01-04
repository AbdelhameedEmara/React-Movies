import Axios from "axios";

export  function SetFavMovies(payload) {
  return {
      type:"SET_MOVIES",
      payload
  }
}



export  function delFavMovies(payload) {
  return {
      type:"DEL_MOVIE",
      payload
  }
}


//////////////cycle of Redux Thunk to get all movies/////////////////////////////
export  const SetMovies = (pgno) => (dispatch) =>{
  return Axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=672cdfe6607c2166acf2affdb81ae188&page=${pgno}`, {
      params: {
        limit: 5,
      },
      headers: {
        "Accept-language": "ar",
      },
    })
    .then((res) =>
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
}

