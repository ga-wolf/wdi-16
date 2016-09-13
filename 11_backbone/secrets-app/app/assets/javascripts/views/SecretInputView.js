var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm", // Reference an existing element (assigned to this.el and this.$el)
    // Was added in the AppView

  events: {
    'click button': 'createSecret',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function (e) {
    var ENTER_KEY = 13;
    if ( event.which === ENTER_KEY ) {
      e.preventDefault();
      this.createSecret();
    }
  },

  createSecret: function (e) {
    var newSecret = new app.Secret(); // urlRoot - /secrets
    var userInput = this.$el.find("textarea").val();
    newSecret.set("content", userInput);

    // The newSecret doesn't have an ID, so this will send a POST request to the url (set as urlRoot) defined on the model
    console.log( newSecret.toJSON() );
    newSecret.save().done(function () {
      console.log(newSecret.toJSON());
    });

    app.secrets.add( newSecret ); // This fires the add event on app.secrets

    this.$el.find("textarea").val('').focus();
  },

  render: function () {
    console.log("An instance of the SecretInputView should be rendered");
    var templateMarkup = $("#secretInputViewTemplate").html();

    this.$el.html( templateMarkup );
  }
});
