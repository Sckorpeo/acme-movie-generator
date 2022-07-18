import React from 'react';

const MovieList = ({ movies, handleMovieUpdate }) => {
    return (
        <div className='content-box'>
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <button>x</button>
                        <span>{movie.name}({movie.rating})</span>
                        <button
                            onClick={() => handleMovieUpdate(movie, { rating: movie.rating - 1 })}
                            disabled={movie.rating <= 1 ? true : false}
                        >-</button>
                        <button
                            onClick={() => handleMovieUpdate(movie, { rating: movie.rating + 1 })}
                            disabled={movie.rating >= 5 ? true : false}
                        >+</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default MovieList;