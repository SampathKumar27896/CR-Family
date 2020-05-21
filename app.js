'use strict';
const express = require('express');
const routes = require('./routes/player');
var ejs = require('ejs');
const app = express();
const favicon = require('express-favicon');
app.use(routes);
app.set('view engine', 'ejs');
app.set('view options', {delimiter: '?'});
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));



app.listen(process.env.PORT || 3000, () => {
    console.log("Server is ready");
})