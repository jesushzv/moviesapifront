import React, { useState } from "react";
import "./UpdateMovie.css";

const UpdateMovie = () => {
  const [movie, setMovie] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const moviesApi = "https://movies-api-db-jhzv.herokuapp.com/movies";
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: movie.id,
       [movie.field]: movie.value,
      }),
    };
    fetch(moviesApi, requestOptions);
  };

  return (
    <div className="update">
      <h1>Update Movie</h1>
      
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="update-id">
        <label>Id:</label>
        <input
          onChange={(e) => setMovie({ ...movie, id: e.target.value })}
          type="number"
          name="id"
          required
        />
        </div>
        
        <div className="update-field">
        <label for="fields">Field:</label>
        <select onChange={(e)=> setMovie({...movie,field:e.target.value})} name="field" id="fields">
          <option name="name" value="name">
            Name
          </option>
          <option name="genre" value="genre">
            Genre
          </option>
          <option name="picture" value="picture">
            Picture
          </option>
          <option name="description" value="description">
            Description
          </option>
          <option name="release_year" value="release_year">
            Release Year
          </option>
        </select>
        </div>
        
        <div className="update-value">
        <label>Value:</label>
        <input onChange={(e) => setMovie({ ...movie, value: e.target.value })} type={movie.field === "release_year" ? "number" : "text"} name="value" required />
        </div>
        <div className="update-btn">
        <button type="submit">Update</button>
        </div>
        
      </form>
    </div>
  );
};

export default UpdateMovie;
