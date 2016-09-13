var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  render: function () {
    console.log("An instance of the app.AppView was created");
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }
  // el or tagName
  // events
  // event functions
  // render
});
