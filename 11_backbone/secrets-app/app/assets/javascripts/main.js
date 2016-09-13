var app = app || {};

$(document).ready(function () {

  if ( $("#app").length === 0 ) {
    return false;
  }

  app.secrets = new app.Secrets();
  // Adds functionality to talk about multiple records
    // Uses a JSON interface with your server
    // It uses the url provided to the "class"
      // GET to /secrets.json



  app.secrets.fetch(); // GET request to the URL that is defined
    // Fires the add event on this particular instance of the app.Secrets collection if there is anything new

  // window.setInterval(function () {
  //   app.secrets.fetch();
  // }, 2000);

  app.router = new app.Router(); // Create an instance of the router
    // Which view should be represented at which time

  Backbone.history.start(); // Tells Backbone to start paying attention to the client-side URLs (hash fragments)

});
