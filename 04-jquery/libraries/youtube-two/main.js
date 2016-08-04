// var allLinks = document.querySelectorAll("a"); // [a, a, a]
var $allLinks = $("a");

// for ( var i = 0; i < allLinks.length; i += 1 ) {
$allLinks.each(function() {

// var currentAnchor = allLinks[i];
  var $link = $(this);

// var href = currentAnchor.getAttribute("href");
  var href = $link.attr("href");

// var thumbnailURL = youtube.generateThumbnailUrl( href );
  var thumbnailURL = youtube.generateThumbnailUrl(href);

// var newImage = document.createElement("img");
// newImage.setAttribute( "src", thumbnailURL );
  var $thumbnailImage = $("<img>").attr("src", thumbnailURL);

// currentAnchor.appendChild( newImage );
  $link.append($thumbnailImage);
});
