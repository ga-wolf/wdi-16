var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  render: function () {
    console.log("An instance of the SecretInputView should be rendered");
    var templateMarkup = $("#secretInputViewTemplate").html();
    
    this.$el.html( templateMarkup );
  }
});
