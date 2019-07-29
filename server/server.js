const path = require('path');
var express = require('express')
var app = express();
const publicPath = path.join(__dirname,'..', 'public');
const port = process.env.PORT || 3000;  //Heroku

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up!');
});