import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2915f48c61c9a0d7cf67c925889bbdcb&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=2915f48c61c9a0d7cf67c925889bbdcb&query="


function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');


  function getMovies(API) {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }

  useEffect(()=>{
    getMovies(FEATURED_API);
  },[]);


  function handleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  }


  function handleChange (e) {
    setSearchTerm(e.target.value);
  };

  return (<>
    <header>
    <h2>Movie House</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange} />
      </form>
    </header>
    <div className="movie-container">
    {movies.length>0 && movies.map((movie)=> 
      <Movie key={movie.id} {...movie}/>
    )}
    </div>
    </>
  );
};

export default App;
