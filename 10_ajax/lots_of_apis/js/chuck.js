var baseChuckURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
var $baseChuck = $(".norris");
var $baseChuckContent = $baseChuck.find(".content");
var $chuckStopButton = $baseChuck.find("button");
var chuckTimer = null;

var displayChuckJoke = function ( data ) {
  var joke = data.value.joke;

  var $p = $("<p></p>");
  $p.text( joke );

  $baseChuckContent.prepend( $p );
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

  chuckTimer = window.setInterval(function () {
    getChuckNorrisJoke();
  }, 1000);
  console.log(chuckTimer);

});
