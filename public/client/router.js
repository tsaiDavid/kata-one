Todo.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create'
  },

  swapView: function(view) {
    this.$el.html(view.render().el);
  },

  index: function() {
    var items = new Todo.Items();
    var itemsView = new Todo.Items

  }
})
