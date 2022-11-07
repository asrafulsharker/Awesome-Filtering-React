
import './App.css';
import {useEffect, useState} from "react";
import Movie from './movie.js';
import Filter from './filfter';


function App(){
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
    useEffect(() =>{
      fetchPopular();
    },[]);

    const fetchPopular = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1');
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
      setFiltered(movies.results)
    }

  return (
    <div className="App">
      <Filter popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre}
      />
      <div className='popular-movies'>
        {filtered.map((movie) =>{
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
