const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'index.html')));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({ err });
});



const init = async () => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
    }
    catch (ex) {
        console.log(ex);
    }
}

init();
