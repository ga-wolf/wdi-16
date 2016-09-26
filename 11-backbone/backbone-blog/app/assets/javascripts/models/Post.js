// Lots of different pieces in SPA
  // Namespace (or scope) everything
    // Grouping
    // Pollution of the global namespace - the window object
    // Avoid conflict

var app = app || {};

// You need to recreate all of your Rails models in Backbone
  // app/models/Post.rb in JavaScript

// If the URLs need to change, we use the urlRoot
  // Single records are really the only time that this takes place

// Creating a new post - POST /posts
// Updating an existing post - PUT/PATCH /posts/:id
// Deleting an existing post - DELETE /posts/:id
// Getting an existing post - GET /posts/:id

app.Post = Backbone.Model.extend({
  urlRoot: "/posts",

  defaults: {
    author: "Anonymous",
    title: "Untitled",
    content: ""
  }
});

// var p1 = new app.Post();
// console.log( p1.toJSON() );
//
// var p2 = new app.Post({
//   author: "Not anonymous"
// });
// console.log( p2.toJSON() );

// // To create a new post, we would send a post request to /posts
//   // It only does this because it doesn't have an ID stored on it
// var p3 = new app.Post();
// p3.save();
//
// // To edit a post, we would need an existing post (meaning one with an ID)
//   // When we call .save on one of those posts, it will send a PUT or a PATCH request to the base URL + the id (/posts/5)
// var p1 = new app.Post();
// p1.save(); // This will send a PUT request to /posts/6
//
// // To destroy a post...
//   // This would need to exist in the database, so it would need an ID
// p1.destroy(); // This will send a DELETE request to /posts/6
//
// // To ask for the latest information about a post...
//   // We would need an ID
// p2.fetch(); // That would make a GET request to /posts/:id (/posts/6)
