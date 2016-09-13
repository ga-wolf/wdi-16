var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'initializeSecretsApp'
  },

  initializeSecretsApp: function () {
    console.log("initializeSecretsApp was called");
    var av = new app.AppView();
    av.render();
  }
});
