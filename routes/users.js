var models = require('../models');
var express = require('express');
var router = express.Router();


router.post('/login', function(req, res) {
    models.User.findOne({
        where: {
            $or: [{
                id: req.body.id,
                password: req.body.password
            }, {
                alias: req.body.id,
                password: req.body.password
            }]
        }
    }).then(function(user) {
        if (user !== null) {
            req.session.user = user.get({plain: true});
            delete req.session.user.password;
            res.redirect('/booking');
        } else {
            res.render('unauthenticated.jade');
        }
    }).catch(function(user) {
        console.log('Error trying to login');
        res.redirect('/');
    });
});

router.get('/logout', function(req, res) {
    delete req.session.user;
    res.redirect('/');
});

router.get('/test', function(req, res) {
    res.render('test.jade');
});

module.exports = router;
