import { createRoot } from 'react-dom/client';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

//Components
import AvgRating from './components/AvgRating';
import Btn from './components/Btn';

const App = () => {
    const [movies, setMovies] = useState([]);

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
        </main>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
