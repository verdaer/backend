var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_api/models/db');//rota tanımı js dosyasından sonra yapılmalı
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//require('./app_api/module/db');//rota tanımı js dosyasından sonra yapılmalı
var apırouter = require('./app_api/routes/index');//??? bu uzantıyı okuyamadı neden bak
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", apırouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
