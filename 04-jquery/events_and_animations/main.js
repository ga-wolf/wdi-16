// // Pure DOM Approach
//
// // var heading = document.querySelector("h1"); // Target
// // var handleClick = function () { // Result
// //   console.log("A heading was clicked");
// // };
// //
// // heading.addEventListener( "mouseover", handleClick ); // Bind
//
// var $h1 = $("h1"); // Select all h1s with jQuery
// var handleClick = function () {
//   console.log("A heading was clicked");
// };
//
// $h1.on( "click", handleClick );
// $h1.on( "mouseover", handleClick );
//
//
// // var button = document.querySelector("button");
// // var count = 0;
// // var updateClickCount = function () {
// //   count += 1;
// //   button.innerHTML = count;
// // };
// //
// // button.addEventListener( "click", updateClickCount );
//
// $("button").on( "click", function ( event ) {
//   var $element = $( event.currentTarget );
//   // Access the current count
//   var cachedCount = parseFloat( $element.html() );
//   // Update the count
//   var newCount = cachedCount + 1;
//   // Change the text of the element that was interacted with
//   $element.html( newCount );
// } );
//
//
//
// $(document).on( "keypress", function ( e ) {
//   var pressed = e.key;
//   var keyCode = e.keyCode;
//   console.log(keyCode);
//   $("span").html( pressed + " " + keyCode );
// } );
//
// $("body").css("min-height", "3000px");
// $(window).on("scroll", function ( e ) {
//   var message = "You have scrolled " + $(window).scrollTop() + "px down the page";
//   // The bottom of your screen is 1000px down the page
//   var distanceToBottom = $(window).scrollTop() + $(window).height();
//   var messageTwo = "The bottom of your screen is " + distanceToBottom + "px down the page";
//   console.log( message );
//   console.log( messageTwo );
// });
//
// $(window).on("resize", function () {
//   var width = $(window).width();
//   console.log( width );
// });
//
//
// $("p.click").on("click", function () {
//   console.log( "Clicked" );
// });
//
// $("p.dblClick").on("dblclick", function () {
//   console.log( "Double clicked" );
// });
//
// $("p.contextMenu").on("contextmenu", function () {
//   console.log( "Context Menu" );
// });
//
// $("a").on("click", function (e) {
//   e.preventDefault();
//   console.log( "We will not change page here" );
// });
//
// // <img src="http://fillmurray.com/200/200" class="toggle"><br>
// // <img src="http://fillmurray.com/300/300" class="slideToggle"><br>
// // <img src="http://fillmurray.com/400/400" class="fadeToggle"><br>
// // <img src="http://fillmurray.com/500/500" class="animate">
//
// $(".toggle").on("click", function () {
//   $(".toggle").toggle();
// });
//
// $(".slideToggle").on("click", function () {
//   $(".slideToggle").slideToggle();
// });
//
// $(".fadeToggle").on("click", function () {
//   $(".fadeToggle").fadeToggle();
// });


$("img.animate").css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100px"
});

var animateBill = function () {
  $(".animate").animate({
    left: "100%"
  }, 2000, function () {

    $(".animate").animate({
      left: "0%"
    }, 2000, function () {
      animateBill();
    });

  });
};

animateBill();



// Doesn't involve the DOM
  // Set up variables
  // Create functions

$(document).ready(function () {
  // The page has fully loaded, you can now add event listeners
  // Attach event handlers

  console.log( "Inside document.ready" );
  console.log( "The body tag", $("body").length );
  $("body").on("click", function () {

    // That keeps track of state - class
    // If something is true
      // If the nav has the class active, we need to hide the nav
        // Animate to -200px
    // If something is false
      // If the nav hasn't got the class active, we need to show the nav
        // Animate back to 0


    if ( $("nav").hasClass("active") ) {

      $("nav").animate({
        right: "-200px"
      }, 500, function () {
        $("nav").removeClass("active");
      });

    } else {

      $("nav").animate({
        right: "0px"
      }, 500, function () {
        $("nav").addClass("active");
      });

    }

  });

});
console.log( "Outside of document.ready" );
console.log( "The body tag", $("body").length );
