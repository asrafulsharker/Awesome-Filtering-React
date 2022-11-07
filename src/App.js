
import './App.css';
import {useEffect, useState} from "react";
import Movie from './movie.js';

function App(){
  const [popular, setPopular] = useState([]);

    useEffect(() =>{
      fetchPopular();
    },[]);

    const fetchPopular = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1');
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    }

  return (
    <div className="App">
      <div className='popular-movies'>
        {popular.map(movie =>{
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
