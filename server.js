const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000; // eslint-disable-line no-process-env, no-undef, max-len
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/marco', (req, res) => res.send("polo"));
app.use(express.
    static(path.join(__dirname, './dist'))); // eslint-disable-line no-undef
app.listen(port, () => console.log(`Listening on port ${port}`));