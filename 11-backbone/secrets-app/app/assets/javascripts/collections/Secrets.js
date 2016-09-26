var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets", // GET request will go here

  model: app.Secret, // Any object that is fetched or added into an instance of this collection will be turned into an instance of app.Secret

  initialize: function () {
    // Add event will be triggered in two ways:
      // app.secrets.add( someObjOrModel );
      // app.secrets.add([someObjOrModel, someObjOrModel] );
      // app.secrets.fetch();
    this.on("add", function (secret) {

      var secretView = new app.SecretView({
        model: secret
      }); // Pass in some data as this view should represent a single secret
        // this.model
      secretView.render();

    });
  }
});

// Read Step
// var secrets = new app.Secrets();
// secrets.fetch();
