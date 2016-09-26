var app = app || {};

app.AppView = Backbone.View.extend({
  // This adds two things to the ` this ` keyword in the context of this view. el refers to an existing element
    // this.el === document.querySelector("#app") (DOM Node)
    // this.$el === $("#app")
  el: "#app",

  render: function () {
    var appViewMarkup = $("#appViewTemplate").html();
    this.$el.html( appViewMarkup );

    // When you initialized this instance of the AppView, you provided a collection key in the object passed in - let's iterate through that
    this.collection.each(function (post) {
      // Pass in the current model to the new PostListView
      var postListView = new app.PostListView({
        model: post // This view is meant to represent one resource
      });
      postListView.render(); // This puts the view on the page
    });
  }
});
