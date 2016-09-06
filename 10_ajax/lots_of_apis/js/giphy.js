// Set up all of the important variables
  // Important elements
  // Base URLs
  // Timers
  // Configuration - API keys

var baseGiphyURL = "http://api.giphy.com";
var API_KEY = "dc6zaTOxFJmzC";
var $baseGiphy = $(".giphy");
var $baseGiphyContent = $baseGiphy.find(".content");
var $giphySearchButton = $baseGiphy.find("button");
var $giphySearchInput = $baseGiphy.find("input");

var displayGif = function ( data ) {
  var imageURL = data.data.image_url;

  var $img = $("<img>");
  $img.attr("src", imageURL);

  $baseGiphyContent.prepend( $img );
};

var getGiphyInformation = function ( term ) {
  var params = { // Add all parameters for AJAX request
    api_key: API_KEY,
    tag: term
  };
  $.ajax({
    url: baseGiphyURL + "/v1/gifs/random",
    type: "GET",
    dataType: "JSON",
    data: params
  }).done( displayGif );
};

// Wait until the page has completed loading so that we can actually add event handlers
$(document).ready(function () {

  $giphySearchButton.on("click", function () {
    var searchTerm = $giphySearchInput.val();
    // Make sure that there is something to search for
    if ( searchTerm.length === 0 ) {
      // Tell the user that they need to type in a search term
      $giphySearchInput.css({
        border: "1px solid red"
      });
      return false;
    }
    getGiphyInformation( searchTerm );
  });

});
