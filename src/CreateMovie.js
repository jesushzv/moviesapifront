import React,{useState} from "react";

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
        <div>
            <h1>Create Movie</h1>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <label>Name:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="name" required/>
                <label>Genre:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="genre" required/>
                <label>Release year:</label>
                <input onChange={(event) => handleChange(event)} type="number" name="release_year" required/>
                <label>Description:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="description" required/>
                <label>Picture:</label>
                <input onChange={(event) => handleChange(event)} type="text" name="picture" required/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateMovie;