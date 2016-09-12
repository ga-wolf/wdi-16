var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: "li", // assigned to this.el and this.$el - $("<li></li>")

  events: {
    'click': 'showPost'
  },

  showPost: function () {
    app.router.navigate( "/posts/" + this.model.get("id"), true );
  },

  render: function () {
    var title = this.model.get('title');
    this.$el.text( title );
    this.$el.appendTo('#posts');
  }
});
