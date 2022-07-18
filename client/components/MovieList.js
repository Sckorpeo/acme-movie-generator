import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div className='content-box'>
            <ul>
                {movies.map(movie => {
                    return <li key={movie.id}>
                        <button>x</button>
                        <span>{movie.name}({movie.rating})</span>
                        <button>-</button>
                        <button>+</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default MovieList;