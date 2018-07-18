var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var cors = require('cors');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/properties.file');
require('./db_connection/database_connection')

var studentRouter = require('./routes/student');
var iquestionRouter = require('./routes/iquestion');


var port=properties.get('server.port');
var prefix = properties.get('server.path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('strict routing');
app.enable('case sensitive routing');
app.disable('x-powered-by');

//userCors
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(prefix, iquestionRouter);
app.use(prefix, studentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
app.listen(port, ()=>console.log(`The Career Companion Server is online(port:${port})`));
