var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",

  model: app.Secret,

  initialize: function () {
    // app.secrets.add( _____ );
    // app.secrets.fetch() - if there is new information
    this.on("add", function (secret) {

      var secretView = new app.SecretView({
        model: secret
      });
      secretView.render();

    });
  }
});

// Read Step
// var secrets = new app.Secrets();
// secrets.fetch();
