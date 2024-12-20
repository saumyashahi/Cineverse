import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=1ea63e4'

// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "2010",
//     "imdbID": "tt1785572",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchterm] = useState([]);

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('Avengers');
    }, []);

    return (
        <div className="app">
            <h1>CineVerse</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchterm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>

            {movies.length > 0
                ? (
                    <div className="container">
                        {/* <MovieCard movie1={movie1} /> shows a single movie*/}
                        {movies.map((movie) => <MovieCard movie={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2> No movies found </h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;

