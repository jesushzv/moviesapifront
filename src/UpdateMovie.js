import React, { useState } from "react";

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
    <div>
      <h1>Update Movie</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Id:</label>
        <input
          onChange={(e) => setMovie({ ...movie, id: e.target.value })}
          type="number"
          name="id"
          required
        />
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
        <label>Value:</label>
        <input onChange={(e) => setMovie({ ...movie, value: e.target.value })} type={movie.field === "release_year" ? "number" : "text"} name="value" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
