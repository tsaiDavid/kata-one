var express = require('express');
var fs = require('fs');
var exphbs  = require('express-handlebars');

// Bookshelf + Knex + Postgres DB
var db = require('./app/config.js')
var Item = require('./app/models/item');
var Items = require('./app/collections/items');

// Express
var app = express();


app.set('views', __dirname + '/views');

app.set('view engine', exphbs);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  var test = Items.get({});
  console.log(test);
  res.render('');
});

console.log('KATA-ONE: server.js is listening on 3000.');

app.listen(process.env.PORT || 3000);
