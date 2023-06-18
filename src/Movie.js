import React from 'react'
import { Link, useParams } from 'react-router-dom'
const Movie = ({movies}) => {
    const params=useParams()

const findMovie=movies.find(movie=>params.name===movie.title)
  return (
    <div>
        <Link to='/'>Home</Link>
        <h1>{findMovie.title}</h1>
        <iframe width="560" height="315" src={findMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <h3>{findMovie.description}</h3>
    </div>
  )
}

export default Movie