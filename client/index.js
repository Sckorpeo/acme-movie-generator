import { createRoot } from 'react-dom/client';
import React, { Component, useEffect, useState } from 'react';
import AvgRating from './components/AvgRating';
import axios from 'axios';

const App = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
            const res = (await axios.get('/api/movies')).data;
            setMovies(res);
        }
        fetchMovies();
    }, []);
    console.log(movies);
    return (
        <main>
            <AvgRating movies={movies} />
        </main>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
