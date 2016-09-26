var loadLorem = null;

$(document).ready(function () {

  var $content = $( ".content" );
  var $h1 = $( "h1" );

  loadLorem = function () {
    $content.load( "../lorem.txt", function () {
      console.log( "Lorem ipsum has been loaded" );
    });
  };

  $h1.on( "click", loadLorem );

});
