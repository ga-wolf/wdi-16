var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
    // Is considered the base of the view
    // this.el - DOM node version
    // this.$el - jQuery selected version
    // An existing element

  render: function () {
    console.log("An instance of the app.AppView was created");
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );

    var secretInputView = new app.SecretInputView();
      // Doesn't need to represent any information, there is no model, there is no collection that it is trying to show
    secretInputView.render();
  }
});
