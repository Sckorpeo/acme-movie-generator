import { createRoot } from 'react-dom/client';
import React, { useEffect, useState } from 'react';
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

    const handleMovieDelete = async (movie) => {
        await axios.delete(`/api/movies/${movie.id}`);
        const newMoviesList = movies.filter(m => m.id !== movie.id);
        setMovies(newMoviesList);
    }

    const generateNewMovie = async () => {
        const { name } = (await axios.get('https://k2maan-moviehut.herokuapp.com/api/random')).data;
        console.log(name);
        const newMovie = (await axios.post('/api/movies', { name })).data;
        setMovies([...movies, newMovie]);
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
            <AvgRating
                movies={movies} />
            <Btn
                text={'Generate Random Movie'}
                handleClick={generateNewMovie} />
            <MovieList
                movies={movies}
                handleMovieUpdate={handleMovieUpdate}
                handleMovieDelete={handleMovieDelete} />
        </main>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
