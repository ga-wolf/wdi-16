var baseChuckURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
var $baseChuck = $(".norris");
var $baseChuckContent = $baseChuck.find(".content");
var $chuckStopButton = $baseChuck.find("button");
var chuckTimer = null;

var displayChuckJoke = function ( data ) {
  console.log( data );
};

var getChuckNorrisJoke = function () {
  console.log( "Fetching a Chuck Norris joke..." );
  $.ajax({
    url: baseChuckURL,
    type: "GET",
    dataType: "JSON"
  }).done( displayChuckJoke );
};

$(document).ready(function () {

  getChuckNorrisJoke();

});

// Display one Chuck Norris joke
// Ask for one Chuck Norris joke
// When to start asking for jokes
