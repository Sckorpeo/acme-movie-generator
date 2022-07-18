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

router.delete('/:id', async (req, res, next) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        await movie.destroy();
        res.sendStatus(204);
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
});

router.post('/', async (req, res, next) => {
    try {
        const movie = await Movie.create({ name: req.body.name });
        res.send(movie);
    }
    catch (ex) {
        next(ex);
    }
});

module.exports = router;