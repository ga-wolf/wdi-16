var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index', // #
    'posts': 'index', // #posts
    'posts/:id': 'showPost', // #posts/:id (#posts/1)
    '*splat': 'error' // If nothing matches, run the error function
  },

  error: function () {
    $("#app").html("That isn't a page");

    window.setTimeout(function () {
      app.router.navigate("/", true);
    }, 1000);
  },

  showPost: function (id) {
    var post = app.posts.get( id );
    var postView = new app.PostView({
      model: post
    });
    postView.render();
  },

  index: function () {
    var appView = new app.AppView({
      collection: app.posts
    });
    appView.render();
  }
});
