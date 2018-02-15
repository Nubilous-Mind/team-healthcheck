var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  port     : 3306,
  database : 'ilt'
});

connection.connect(function(err){
  if(err){
    console.log('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');

});

var teamArr = [];

connection.query("select * from team", function(errorQuery, result, fields){
  if(errorQuery) throw errorQuery;

  for(var i in result){
    teamArr.push(result[i].name);
  }
  
});

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { teams: teamArr });
});

module.exports = router;
