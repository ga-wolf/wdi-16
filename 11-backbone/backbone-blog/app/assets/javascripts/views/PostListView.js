var app = app || {};

app.PostListView = Backbone.View.extend({
  // tagName will create a new element - in this case it will be a new list item
    // Assign that new element to:
      // this.el as the DOM node
      // this.$el as the jQuery version
  tagName: "li",

  // We have used event delegation to add event handlers
  events: {
    'click': 'showPost'
  },

  showPost: function () {
    // If someone clicks anywhere in this particular tag
      // Change the client side URL to be /posts/:id
      // It fills in the id part with the ID from the model that was provided
    // Second parameter just means trigger a new router in the router
    app.router.navigate( "/posts/" + this.model.get("id"), true );
  },

  render: function () {
    // When you created an instance of this view, you just passed in an object that contained a model key
    var title = this.model.get('title');
    this.$el.text( title );
    // Put the new li on the page, with the appropriate title
    this.$el.appendTo('#posts');
  }
});
