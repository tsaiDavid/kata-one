var path = require('path');
// requiring postgres database here and passing in connection options (knex)
var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});
// setting database to the variable db
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('text', 255);
      link.integer('visits');
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
