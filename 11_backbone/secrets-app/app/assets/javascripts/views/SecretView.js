var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li', // This creates a new li and sets it up as this.el and this.$el

  render: function () {
    // We provided a model when we instantiated this view
      // Save it's content
    var content = this.model.get("content");
    this.$el.text( content );
    this.$el.prependTo( "#secrets" );
  }
});
