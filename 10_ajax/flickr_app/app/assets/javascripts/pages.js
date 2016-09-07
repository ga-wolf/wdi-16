// Keep working on the Flickr App
// Add a next page button
  // Adding query parameters of page and maybe per_page
// Add some validations to the page
  // Show an error if there are no photos to display
  // Only show photos related to the search term
// Infinite scroll
  // Show more photos when someone is 50px away from the bottom of the page
  // $(window).height(); - browser window height
  // $(document).height(); - entire page height
  // $(window).scrollTop(); - how far has the user scrolled down
// Lightbox or slider - feel free to use a library there
// Throttling and/or debouncing
  // http://underscorejs.org/#throttle

var baseFlickrURL = "https://api.flickr.com/services/rest";
var API_KEY = "2f5ac274ecfac5a455f38745704ad084";

var generateImageURL = function ( data ) {
  var url = "https://farm";
  url += data.farm;
  url += ".staticflickr.com/";
  url += data.server;
  url += "/";
  url += data.id;
  url += "_";
  url += data.secret;
  url += "_q.jpg";
  return url;
};

var displayPhoto = function ( url ) {
  var $img = $("<img>");
  $img.attr("src", url);
  $("body").append( $img );
};

var handleSearchData = function ( data ) {
  var arrOfPhotos = data.photos.photo;
  for ( var i = 0; i < arrOfPhotos.length; i += 1 ) {
    var currentPhoto = arrOfPhotos[i];
    var imageURL = generateImageURL( currentPhoto );
    displayPhoto( imageURL );
  }
};

var searchFlickr = function ( term ) {
  $.ajax({
    url: baseFlickrURL,
    type: "GET",
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: term,
      format: "json",
      nojsoncallback: true,
      // page: 1,
      // per_page: 200
    }
  }).done( handleSearchData );
};

$(document).ready(function () {

  $("form").on("submit", function (e) {
    e.preventDefault();
    var searchQuery = $("#searchFlickr").val();

    if ( searchQuery.length === 0 ) {
      $("#searchFlickr").css({
        border: "1px solid red"
      });
      return false;
    }
    searchFlickr( searchQuery );
  });

});

// Create our important variables
  // Base URL
  // API Keys
  // Elements that will be commonly used

// Event handlers - don't add these until the document is ready!
  // Validate that we are ready to search

// Search Flickr

// Display all images that come back from search

// Display one image
  // Generate image URL
