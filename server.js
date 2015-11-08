var express = require('express');
var app = express();
var knex = require('knex');
var db = require('./db/config.js')

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
