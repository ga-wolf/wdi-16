var app = app || {};

$(document).ready(function () {

  app.secrets = new app.Secrets();
  app.secrets.fetch(); // GET request to the URL that is defined

  app.router = new app.Router();
  Backbone.history.start();

});
