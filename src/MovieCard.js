import React from 'react'
import{Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.title}`}>
      {<div>
      <img style={{height:400, width:200}} src={movie.posterURL} alt="" />
      <h2>{movie.title}</h2>
      <h2>{movie.description}</h2>
      <h2>{movie.rating}</h2>
  </div>}</Link>
 
  )
}

export default MovieCard