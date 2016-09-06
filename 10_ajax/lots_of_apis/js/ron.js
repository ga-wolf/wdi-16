var ronBaseURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var $baseRon = $(".swanson");
var $baseRonContent = $baseRon.find(".content");
var $ronStopButton = $baseRon.find("button");
var ronTimer = null;

var displayRonQuote = function ( arrOfQuotes ) {
  var quote = arrOfQuotes[0];

  // Create, manipulate, inject
  var $newParagraph = $("<p></p>");
  $newParagraph.text( quote );

  $baseRonContent.prepend( $newParagraph );
};

var getRonQuotes = function () {
  console.log("Fetching Swanson quotes...");
  // Make a GET request, asking for JSON for the ronBaseURL (http://ron-swanson-quotes.herokuapp.com/v2/quotes)
    // When the data is successfully returned, call the displayRonQuote - passing it the appropriate data (the JSON parsed version)
  $.ajax({
    url: ronBaseURL,
    type: "GET",
    dataType: "JSON"
  }).done( displayRonQuote );
};

$(document).ready(function () {
  getRonQuotes();

  ronTimer = window.setInterval(function () {
    getRonQuotes();
  }, 1000);

  $ronStopButton.on("click", function () {
    window.clearInterval( ronTimer );
  });
});
