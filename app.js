var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var models = require(__dirname + '/models');
var cors = require('cors');

var api = require(__dirname + '/routes/api');

var app = express();

const sequelize_fixtures = require('sequelize-fixtures');

/**
 * Database sync
 */
models.sequelize.sync()
.then(function(){
	sequelize_fixtures.loadFile('fixtures/data.json', models);
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({ status: '404', message: 'Not found' });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json({ status: err.status || 500, message: 'Internal server error'});
});

module.exports = app;
