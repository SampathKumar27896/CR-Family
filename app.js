'use strict';
const express = require('express');
const routes = require('./routes/player');
var ejs = require('ejs');
const app = express();

app.use(routes);
app.set('view engine', 'ejs');
app.set('view options', {delimiter: '?'});
app.use(express.static(__dirname + '/public'));




app.listen(process.env.PORT || 3000, () => {
    console.log("Server is ready");
})