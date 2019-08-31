var express = require('express');
var router = express.Router();
const db = require('../config').db;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  console.log('POST login body', rea.body);
  /* var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port
  })

  connection.connect();

  connection.query(`SELECT * FROM users WHERE username=${} AND password=${}`, function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
  })

  connection.end() */

  res.send({key: 'value'});
});

module.exports = router;
