var express = require('express');
var router = express.Router();
const parse = require('parse/node');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('user', req.session.user);
  if (!req.session.user) {
    res.writeHead(307, {
      'Location': '/'
    });
    return res.end();
  }

  const query = new parse.Query('Plant');
  query.find({sessionToken: req.session.user.sessionToken})
  .then(plants => {
    res.render('home', { plants });
  }).catch(error => {
    console.error(error);
    res.render('home', {plants: []});
  });
});

module.exports = router;
