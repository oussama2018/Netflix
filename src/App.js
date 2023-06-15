import './App.css';
import MovieList from './MovieList';
import { useRef, useState } from 'react';
import Filter from './Filter';

function App() {
  const [movies,setmovies]=useState(
    [
      {title:"Never Back Down",
       description:"good",
       posterURL:"https://th.bing.com/th/id/OIP.qKCGb8XceooTJDC1o7MwLAHaEK?pid=ImgDet&rs=1",
       rating:7
      },
      {title:"Lucy",
       description:"good",
       posterURL:"https://i.pinimg.com/736x/f6/8d/f2/f68df24928b9416177b4940301af1cd8.jpg",
       rating:8.5
      },
      {title:"Squid Game",
      description:"good",
      posterURL:"https://th.bing.com/th/id/OIP.Y9daHZWBWAsWgGuHdYY_0wAAAA?pid=ImgDet&rs=1",
      rating:9.5
      }
    ]
  )
  const [Stitle, setStitle]=useState("")
  const [Srate,setRate]=useState(0)
  const title= useRef()
  const description=useRef()
  const posterURL=useRef()
  const rating=useRef()
  
  const searchTitle=useRef()
  const searchRate =useRef()
  const handleSearch=()=>{
    setStitle(searchTitle.current.value)
    setRate(searchRate.current.value)
  }
  const handleadd=()=>{
    setmovies([...movies,{title:title.current.value,
    description:description.current.value,
    posterURL:posterURL.current.value,
    rating:rating.current.value}])
  }
  return (
    <div className="App">
      <div>
        <input placeholder='title' ref={title}></input>
        <input placeholder='description' ref={description}></input>
        <input placeholder='posterUrl' ref={posterURL}></input>
        <input placeholder='rating' ref={rating}></input>
        <button onClick={handleadd}>Add movie</button>
      </div>
      <Filter searchRate={searchRate} searchTitle={searchTitle} handleSearch={handleSearch}/>
      <MovieList movies={movies.filter(element=> element.title.toLowerCase().trim().includes(Stitle.toLowerCase().trim()) && element.rating>=Srate)}/>
    </div>
  );
}

export default App;
