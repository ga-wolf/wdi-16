var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index', // localhost:3000/app# or localhost:3000/app
    'posts': 'index', // #posts
    'posts/:id': 'showPost', // localhost:3000#posts/:id (#posts/1)
    '*splat': 'error' // If nothing matches, run the error function
  },

  error: function () {
    $("#app").html("That isn't a page");

    window.setTimeout(function () {
      app.router.navigate("/", true);
    }, 1000);
  },

  showPost: function (id) {
    // id is provided as there is a dynamic part in the URL
      // Similar to params[:id]
    var post = app.posts.get( id ); // .get is similar to our .find in Rails
    // Create a new PostView (our show.html.erb in Rails), providing the model that needs to be represented
    var postView = new app.PostView({
      model: post
    });
    postView.render();
  },

  index: function () {
    var appView = new app.AppView({
      collection: app.posts
    }); // This is letting the new instance of app.AppView represent an entire collection, very similar to passing in instance variables to views
    appView.render(); // Actually put the appView on the page
  }
});
