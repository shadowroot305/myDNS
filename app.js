var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var dns = require('./routes/dnsRoutes');
var hazards = require('./routes/hazardsRoutes')
var reports = require('./routes/reportsRoutes')
var custom = require('./routes/customRoutes')
var favicon = require('serve-favicon');

var app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

require("./models/mysql_con");


app.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); 



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/dns', dns);
app.use('/api/hazards', hazards);
app.use('/api/reports', reports);
app.use('/api/custom', custom);




app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    console.log(err);
    res.send(err);
});

module.exports = app;