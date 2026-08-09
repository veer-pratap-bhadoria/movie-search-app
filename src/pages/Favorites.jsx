import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../context/MovieContext';

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {

    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movie-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>)
  }


  return (
    <div className='box'>
      <div className='fav-container'>
        <h2>No favorite movies yet</h2>
        <p>Add movies to your Favorites and they will appear here</p>
      </div>
    </div>
  )
}

export default Favorites