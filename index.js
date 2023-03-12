
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();



app.get('/', (req, res) => { 
    res.send('Hi, welcome to heroku app');
})

app.listen(port, () => {
    console.log('Heroku server listening on port:', port );
})