$(document).ready(function () {

  // Get all of the posts in my database
    // Once they have all come back, I want to render them in the AppView

  app.posts = new app.Posts();
  app.posts.fetch().done(function () {

    app.router = new app.Router();
    Backbone.history.start();

  });
});
