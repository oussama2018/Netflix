import React from 'react'
import MovieCard from './MovieCard'
import Movie from './Movie'

const MovieList = ({movies}) => {
  return (
    
    <div>
        {movies.map(movie =><MovieCard movie={movie}/>)}
    </div>
  )
}

export default MovieList