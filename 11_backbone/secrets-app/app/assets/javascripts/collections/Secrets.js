var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",

  model: app.Secret,

  initialize: function () {
    this.on("add", function (secret) {
      console.log("A secret was added");
    });
  }
});

// Read Step
// var secrets = new app.Secrets();
// secrets.fetch();
