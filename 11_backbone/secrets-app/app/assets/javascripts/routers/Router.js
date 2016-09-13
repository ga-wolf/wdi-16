var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'initializeSecretsApp',
    '*error': 'noRouteFound'
  },

  noRouteFound: function () {
    $("#app").html("<h1>There is nothing here</h1>");
  },

  initializeSecretsApp: function () {
    console.log("initializeSecretsApp was called");
    var av = new app.AppView(); // Creates a new instance of the AppView
      // Similar to application.html.erb - it just loads other views into it (like the yield statement does)
    av.render();
  }
});
