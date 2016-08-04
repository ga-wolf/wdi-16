var allLinks = document.querySelectorAll("a"); // [a, a, a]

for ( var i = 0; i < allLinks.length; i += 1 ) {
  var currentAnchor = allLinks[i];
  var href = currentAnchor.getAttribute("href");
  var thumbnailURL = youtube.generateThumbnailUrl( href );

  var newImage = document.createElement("img");
  newImage.setAttribute( "src", thumbnailURL );

  currentAnchor.appendChild( newImage );
}
