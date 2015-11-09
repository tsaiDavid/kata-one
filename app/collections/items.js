// Represents 'items' Table in our db

var db = require('../../app/config');
var Item = require('../models/item');

var Items = new db.Collection();

Items.model = Item;

module.exports = Items;
