var displayMovie = function ( movie ) {
  // Movie is equal to dataAsObject - JSON parsed version of the data that comes back

  // Store the references
  var $poster = $("img#poster");
  var $title = $("h2#title");
  var $plot = $("p#plot");

  // Make the changes that we need
  $title.text( movie.Title );
  $plot.text( movie.Plot );
  $poster.attr( "src", movie.Poster );

  $("body").css({
    backgroundImage: "url(" + movie.Poster + ")"
  });
};

// Define non-DOM related things outside of document ready to make sure that they are accessible from the console
var searchOMDB = function ( searchTerm ) {
  // Set the main URL for the APi
  var baseURL = "http://omdbapi.com";

  // Pass in configuration for the AJAX request
  $.ajax({
    url: baseURL,     // The main URL
    type: "GET",      // The method
    dataType: "JSON", // What we are asking for
    data: {           // All parameters that we want to send
      t: searchTerm,
      tomatoes: true,
      plot: "full"
    }
  }).done( displayMovie ); // Call displayMovie passing in all parameters that jQuery provides
};

// Wait until the every element has completed loading
$(document).ready(function () {
  // Save references to jQuery selected elements:
    // Efficiency
    // Reference point
  var $form = $("form");
  var $searchField = $("input#search");

  // Select the form and when the submit event takes place, run this callback
  // Submit event runs when:
    // A user clicks the submit button
    // A user hits enter in the last input field
  $form.on("submit", function ( event ) {
    // Stop the browser reloading or redirecting when the submit event fires
    event.preventDefault();
    var searchValue = $searchField.val();
    // Make sure that there is something to search for
    if ( searchValue.length === 0 ) {
      return false;
    }
    searchOMDB( searchValue );
  });
});
