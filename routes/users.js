var express = require('express');
var router = express.Router();
const db = require('../config').db;

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
    
    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.database,
      port: db.port
    });

    connection.connect((err) => { throw err; });

    connection.query(`SELECT * FROM users WHERE username=${req.body.user} AND password=${req.body.password}`, function (err, rows, fields) {
      if (err) throw err;

      if (rows.length > 0) {
        console.log('The solution is: ', rows[0]);
        res.send({ message: 'Logged in !' });
      } else {
        res.statusCode = 401;
        res.send({ message: 'Wrong login/password' })
      }
    })

    connection.end()
  } catch (e) { console.error(e); }
});

module.exports = router;
