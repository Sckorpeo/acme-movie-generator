const { conn, Movie } = require('./index');

async function syncAndSeed() {

    await conn.sync({ force: true });

    await Movie.create({ name: 'Distributed High Level Product' });
    await Movie.create({ name: 'Optimized attribute-oriented approach' });
    await Movie.create({ name: 'Reactive needs-based parallelism' });

}

module.exports = {
    syncAndSeed
}