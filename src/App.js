import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
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
  return (
    <div className="App">
      <Filter/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
