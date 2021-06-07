var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var todoRouter = require('./routes/todo-list');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/todo', todoRouter);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    console.log(err);
    res.status(err.status || 500 ).json({
        error: err.message
    });
  });
module.exports = app;
