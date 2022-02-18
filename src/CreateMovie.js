import React,{useState} from "react";
import "./CreateMovie.css";

const CreateMovie = () => {

    var [movie,setMovie] = useState({
        name: "",
        genre: "",
        picture: "",
        description: "",
        release_year: "",
        likes: 0
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const moviesApi = 'https://movies-api-db-jhzv.herokuapp.com/movies';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie)
        }
        fetch(moviesApi, requestOptions);
    }
    
    return(
        <div className="create">
            <h1>Create Movie</h1>
            <form className="create-form" onSubmit={(event)=>handleSubmit(event)}>
                <div className="create-name">
                <label>Name:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="name" required/>
                </div>

                <div className="create-genre">
                <label>Genre:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="genre" required/>
                </div>

                <div className="create-releaseyear">
                <label>Release year:</label>
                <input onChange={(event) => handleChange(event)} type="number" name="release_year" required/>
                </div>

                <div className="create-description">
                <label>Description:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="description" required/>
                </div>

                <div className="create-picture">
                <label>Picture:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="picture" required/>
                </div>

                <div className="create-btn">
                <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
export default CreateMovie;