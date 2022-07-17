const express = require('express');
const app = express();
const path = require('path');
const { syncAndSeed } = require('./db/syncAndSeed');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use('/public', express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'index.html')));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({ err });
});

const init = async () => {
    try {
        await syncAndSeed();
        console.log('Seed successful!');
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
    }
    catch (ex) {
        console.log(ex);
    }
}

init();
