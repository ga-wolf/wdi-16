var app = app || {};

// Represent one record in our secrets table - Secret.first
app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets",
    // No ID? .save() will make a POST request to /secrets
    // With an ID, .save() will make a PUT request to /secrets/:id
    // With an ID, .destroy() will make a DELETE request to /secrets/:id
    // With an ID, .fetch() will make a GET request to /secrets/:id
  defaults: {
    content: "I put bleach in your coffee"
  },
  initialize: function () {
    console.log("A new secret was created");
  }
});

// var s = new app.Secret(); // Creating a variable in JS (an instance of the app.Secret constructor) - will have the default values

// // Create Step
// s.save(); // No ID - POST request to the urlRoot
//
// // Read Step
// s.fetch(); // GET request to urlRoot + id
//
// // Update Step
// s.set("content", "I put bleach in your coffee");
// s.save(); // Has an ID - PUT request to the urlRoot + id
//
// // Delete Step
// s.destroy(); // DELETE request to urlRoot + id
