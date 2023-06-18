import './App.css';
import MovieList from './MovieList';
import { useRef, useState } from 'react';
import Filter from './Filter';
import { Routes,Route } from 'react-router-dom';
import Movie from './Movie';
function App() {
  const [movies,setmovies]=useState(
    [
      {title:"Never Back Down",
       description:"A frustrated and conflicted teenager arrives at a new high school to discover an underground fight club, and meets a classmate who begins to coerce him into fighting.",
       posterURL:"https://th.bing.com/th/id/OIP.qKCGb8XceooTJDC1o7MwLAHaEK?pid=ImgDet&rs=1",
       rating:6.5,
       trailer:"https://www.youtube.com/embed/B6y1a9IBN2Y"
      },
      {title:"Lucy",
       description:"A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
       posterURL:"https://i.pinimg.com/736x/f6/8d/f2/f68df24928b9416177b4940301af1cd8.jpg",
       rating:6.5,
       trailer:"https://www.youtube.com/embed/7gPrNpHaFX8"
      },
      {title:"Squid Game",
      description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
      posterURL:"https://th.bing.com/th/id/OIP.Y9daHZWBWAsWgGuHdYY_0wAAAA?pid=ImgDet&rs=1",
      rating:8,
      trailer:"https://www.youtube.com/embed/oqxAJKy0ii4"
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
    <Routes>
      <Route path='/' element={ <div className="App">
      <div>
        <input placeholder='title' ref={title}></input>
        <input placeholder='description' ref={description}></input>
        <input placeholder='posterUrl' ref={posterURL}></input>
        <input placeholder='rating' ref={rating}></input>
        <button onClick={handleadd}>Add movie</button>
      </div>
      <Filter searchRate={searchRate} searchTitle={searchTitle} handleSearch={handleSearch}/>
      <MovieList movies={movies.filter(element=> element.title.toLowerCase().trim().includes(Stitle.toLowerCase().trim()) && element.rating>=Srate)}/>
      
    </div>}/>
    <Route path='/movie/:name' element={<Movie movies={movies}/>}/>
    </Routes>
   
  );
}

export default App;
