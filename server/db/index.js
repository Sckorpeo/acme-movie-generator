const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:/acme_movies_db');

const Movie = conn.define('movie', {
    name: {
        type: STRING
    },
    rating: {
        type: INTEGER,
        defaultValue: 3
    }
});

Movie.addHook('beforeUpdate', (movie, options) => {
    const { rating } = movie.dataValues;
    if (rating >= 6 || rating <= 0) {
        throw new Error('Rating cannot go below 1 or above 5.');
    }
});

module.exports = {
    conn,
    Movie
}