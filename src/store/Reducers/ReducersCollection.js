import { combineReducers } from "@reduxjs/toolkit";
import AllmoviesReducer from "./AllmoviesReducer";
import favMoviesReducers from "./MoviesReducers";

export default combineReducers({
  favourite : favMoviesReducers ,
  allmovies : AllmoviesReducer
}
)