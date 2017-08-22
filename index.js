const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.port || 4000;

// set up Express app
const app = express();

app.use(bodyParser.json());

// initialise routes
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    // res.send(req.method + " request made");
    res.send('Use /api in URL');
});


app.listen(PORT, ()=> {
    console.log('Listening on port ' + PORT);
});