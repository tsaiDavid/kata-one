// Represents 'item' row in our db
var db = require('../../app/config');

var Item = db.Model.extend({
  tableName: 'items',
  hasTimestamps: true,
  defaults: {
    completed: false
  },
  initialize: function() {
    // fired before INSERT query
    this.on('creating', function(model, attrs, options){
      console.log('This is the model inside itemModel init: ', model);
      console.log('These are the attrs inside itemModel init: ', attrs);
      console.log('These are the options inside itemModel init: ', options);
    });
  }
});

module.exports = Item;
