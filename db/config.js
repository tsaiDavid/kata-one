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

// db.knex.schema.hasTable('clicks').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('clicks', function (click) {
//       click.increments('id').primary();
//       click.integer('link_id');
//       click.timestamps();
//     }).then(function (table) {
//       console.log('Created Clicks Table', table);
//     });
//   }
// });

/************************************************************/
// Add additional schema definitions below
/************************************************************/

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 255).unique();
//       user.string('password', 255);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Users Table', table);
//     });
//   }
// })

module.exports = db;
