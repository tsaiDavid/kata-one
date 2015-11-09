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
  // helpers: {
  //   foo: function () { return 'FOO!'; },
  //   bar: function () { return 'BAR!'; }
  // }
});

app.use(bodyParser());
app.use(bodyParser.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  var result;
  new Item({}).fetchAll().then(function(item) {
    item.forEach(function(model) {
      console.log(model.attributes.text);
    })
  })
  res.render('home');
});

console.log('KATA-ONE: server.js is listening on 3000.');

app.listen(process.env.PORT || 3000);
