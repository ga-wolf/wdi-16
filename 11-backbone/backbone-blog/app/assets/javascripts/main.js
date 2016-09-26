$(document).ready(function () {

  // Get all of the posts in my database
    // Once they have all come back, I want to render them in the AppView

  app.posts = new app.Posts();
  // Make a GET request to the url attached to app.Posts (/posts)
    // Once that is complete, go ahead and start the router
  app.posts.fetch().done(function () {

    app.router = new app.Router(); // Creating a new instance of the app Router
    Backbone.history.start(); // Using the new app.router set up above, actually start listening to the client-side URLs (the hash fragment)

  });
});
