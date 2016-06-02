var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var booking = require('./routes/booking');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: false
}));


//validate session exists
//FIXME to improve along the way
app.use(function(req, res, next) {
    if (req.url !== "/" && req.url !== '/users/login' && !req.session.user) {
        var err = new Error('Not Found');
        err.status = 404;
        res.error = err;
        res.render("error.jade", {
            message: "You are not authenticated"
        });
    } else {
        res.locals.user = req.session.user;
        next();
    }
});


app.use('/', routes);
app.use('/users', users);
app.use('/booking', booking);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});


module.exports = app;
