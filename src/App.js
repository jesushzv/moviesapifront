import './App.css';
import {useState,useEffect} from 'react';
import Navbar from './Components/Navbar';
import CreateMovie from './CreateMovie';
import UpdateMovie from './UpdateMovie';

function App() {

  const moviesApi = 'https://movies-api-db-jhzv.herokuapp.com/movies';

  var [movies,setMovies]=useState([]);

  useEffect(()=>{
    getMovies();
    },[movies]);

  const getMovies = async () => {
      fetch(moviesApi)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
  }

  const updateLikes = async (id,likes) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({likes:likes+1})
    };
      fetch(`https://movies-api-db-jhzv.herokuapp.com/movies/likes/${id}`, requestOptions)
      .then(()=>{
        getMovies();
      })
  }

  const deleteMovie = async (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`https://movies-api-db-jhzv.herokuapp.com/movies/delete/${id}`, requestOptions)
    .then(()=>{
      getMovies();
    })
  }



  return (
    <div className="App">
      <Navbar />
      <h1>Movies  Catalog</h1>
      <h2>By jesushzv and gilbertosantana24</h2>
      <div className = "peliculas">
      {movies
      .sort((a,b)=>{
        return b.id - a.id;
      })
      .map(movie=>{
        return(
          <div key={movie.id}>
            <img src={movie.picture} alt="Movie picture"/>
            <h3>{movie.name}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.release_year}</p>
            <p>Description: {movie.description}</p>
            <p>Likes: {movie.likes}</p>
            <button onClick={()=> updateLikes(movie.id,movie.likes)} >Like</button>
            <button onClick={()=> deleteMovie(movie.id)}>Delete</button>
          </div>
        )
      })}
      </div>

      <CreateMovie />
      <UpdateMovie />

    </div>
  );
}

export default App;
