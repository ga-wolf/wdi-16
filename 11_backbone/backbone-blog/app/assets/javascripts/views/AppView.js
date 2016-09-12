var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app", // Adds this.el and this.$el

  render: function () {
    var appViewMarkup = $("#appViewTemplate").html();
    this.$el.html( appViewMarkup );

    this.collection.each(function (post) {
      var postListView = new app.PostListView({
        model: post
      });
      postListView.render();
    });
  }
  // initialize
  // events
  // custom event functions
  // render
  // el
});
