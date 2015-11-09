var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var Promise = require('bluebird');

// Bookshelf + Knex + Postgres DB
var db = require('./app/config.js')
var Item = require('./app/models/item');
var Items = require('./app/collections/items');

// Express
var app = express();
var exphbs  = require('express-handlebars');

// Handlebars
var hbs = exphbs.create({
  // specify helpers which are only registered on this instance
  helpers: {
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
});

app.engine('handlebars', hbs.engine);
// app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// app.use(express.static(__dirname + '/public'));

var retrieveData = function() {
  var result;
  new Item({})
    .fetchAll()
    .then(function(items) {
      result = JSON.stringify(items);
    });
  return result;
};

app.get('/', function(req, res){
  var test = retrieveData();
  console.log(test);
  res.render('home');
});

console.log('KATA-ONE: server.js is listening on 3000.');

app.listen(process.env.PORT || 3000);
