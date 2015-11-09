window.TodoApp = Backbone.View.extend({
  template: Templates['home'],

  initialize: function() {
    console.log('TodoApp is now running, from Backbone.View!');
    $('body').append(this.render().el);
  },

  render: function() {
    this.el$html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    // this.router.navigate('/', { trigger: true });
  }
});
