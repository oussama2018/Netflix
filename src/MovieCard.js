import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
        <img style={{height:400, width:200}} src={movie.posterURL} alt="" />
        <h2>{movie.title}</h2>
        <h2>{movie.description}</h2>
        <h2>{movie.rating}</h2>
    </div>
  )
}

export default MovieCard