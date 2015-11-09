window.TodoApp = Backbone.View.extend({
  initialize: function() {
    console.log('TodoApp is now running, from Backbone.View!');
    $('body').append(this.render().el);

    this.router = new 
  },

  render: function() {
    this.el$html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  }
});
