var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app", // References an existing element (this.el and this.$el)

  render: function () {
    // Static markup that has dynamic parts
    var templateMarkup = $("#postViewTemplate").html();
    // A function generated for us by underscore, that receives an object (this is what makes it dynamic)
    var dynamicMarkupTemplate = _.template( templateMarkup );
    // We compile the template using the appropriate data
    var compiledTemplate = dynamicMarkupTemplate( this.model.toJSON() );

    this.$el.html( compiledTemplate );
  }
});
