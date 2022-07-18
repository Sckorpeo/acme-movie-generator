import { createRoot } from 'react-dom/client';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

//Components
import AvgRating from './components/AvgRating';
import Btn from './components/Btn';
import MovieList from './components/MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);

    const handleMovieUpdate = async (movie, propToUpdate) => {
        const updatedMovie = (await axios.put(`/api/movies/${movie.id}`, { ...movie, ...propToUpdate })).data;
        const newMoviesList = movies.map(m => m.id !== movie.id ? m : updatedMovie);
        setMovies(newMoviesList);
    }

    useEffect(() => {
        console.log('In App UseEffect');
        async function fetchMovies() {
            const res = (await axios.get('/api/movies')).data;
            setMovies(res);
        }
        fetchMovies();
    }, []);

    return (
        <main>
            <AvgRating movies={movies} />
            <Btn text={'Generate Random Movie'} handleClick={() => console.log('Btn pressed')} />
            <MovieList movies={movies} handleMovieUpdate={handleMovieUpdate} />
        </main>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
