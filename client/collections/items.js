var db = require('../../db/config');
var Item = require('../models/item');

var Items = new db.Collection();

Items.model = Item;

module.exports = Items;
