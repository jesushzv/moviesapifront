import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import CreateMovie from './CreateMovie';
import UpdateMovie from './UpdateMovie';
import Movies from './Movies';
import AboutUs from './AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {

  const moviesApi = 'https://movies-api-db-jhzv.herokuapp.com/movies';

  var [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [movies]);

  const getMovies = async () => {
    fetch(moviesApi)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
  }

  const updateLikes = async (id, likes) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: likes + 1 })
    };
    fetch(`https://movies-api-db-jhzv.herokuapp.com/movies/likes/${id}`, requestOptions)
      .then(() => {
        getMovies();
      })
  }

  const deleteMovie = async (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`https://movies-api-db-jhzv.herokuapp.com/movies/delete/${id}`, requestOptions)
      .then(() => {
        getMovies();
      })
  }



  return (
    <div className="App">
          <Navbar />
          <Routes>
          <Route path="/" element={<Movies/>} />

          <Route path="/aboutus" element={<AboutUs/>} />
          
          <Route path="/addmovie" element={<CreateMovie/>} />
          

          <Route path="/updatemovie" element={<UpdateMovie/>} />

          </Routes>
    </div>
  );
}

export default App;
