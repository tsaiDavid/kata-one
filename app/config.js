// config file contains table schemas and inits postgres db

var path = require('path');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: 'admin',
    database: 'kataone',
    charset: 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('items', function (link) {
      link.increments('id').primary();
      link.string('text', 255);
      link.boolean('completed');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Items Table', table);
    });
  }
});

module.exports = db;
