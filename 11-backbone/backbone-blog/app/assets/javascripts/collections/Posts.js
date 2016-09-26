var app = app || {};

app.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: app.Post
});

// Because we specified a URL property
  // When we call .fetch() is will make a GET request to that URL
    // app.posts = new app.Posts();
    // app.posts.fetch(); // => GET /posts
