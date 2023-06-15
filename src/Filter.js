import React from 'react'

const Filter = ({searchRate,searchTitle,handleSearch}) => {
  return (
    <div>
      <input placeholder='search by title' ref={searchTitle}></input>
      <input placeholder='search by rate' ref={searchRate}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Filter