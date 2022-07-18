const express = require('express');
const router = express.Router();
const { Movie } = require('../db/index');

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.findAll();
        res.send(movies);
    }
    catch (ex) {
        next(ex);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        await movie.update(req.body);
        res.send(movie);
    }
    catch (ex) {
        next(ex);
    }
})

module.exports = router;