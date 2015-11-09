var express = require('express');
var fs = require('fs');

// Bookshelf + Knex + Postgres DB
var db = require('./db/config.js')
var Item = require('./client/models/item');
var Items = require('./client/collections/items');

// Express 
var app = express();

app.get('/', function(req, res){
  var test = Items.get({});
  console.log(test);
  res.send('hello world');
});

console.log('KATA-ONE: server.js is listening on 3000.');

app.listen(process.env.PORT || 3000);
