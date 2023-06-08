var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var cancionesRouter = require('./routes/canciones');
const cancionesController = require('./controllers/cancionesController');


var app = express();

// view engine setup

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',cancionesRouter);

module.exports = app;
