var express = require('express');
var router = express.Router();
const config = require('../config');
const parse = require('parse/node');

parse.initialize(config.parse.appId, config.parse.jsKey);
parse.serverURL = config.parse.serverUrl;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  try {
    if (!req.body.user) {
      res.statusCode = 400;
      return res.send({ error: 'Missing username' });
    }
    if (!req.body.password) {
      res.statusCode = 400;
      return res.send({ error: 'Missing password' });
    }

    parse.User.logIn(req.body.user, req.body.password).then((user) => {
      console.log('Logged in user', user);
      req.session.user = user;
      res.send({message: "Login successful", user});
    }).catch(error => {
      console.error('Error while logging in user', error);
      res.statusCode = 400;
      res.send({ error });
    });
  } catch (e) { console.error(e); }
});

module.exports = router;
