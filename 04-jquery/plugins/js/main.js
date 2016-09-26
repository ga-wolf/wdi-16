// IIFE
  // Immediately Invoked Function Expression

  // Encapsulating your code
  // Protecting your variables
  // Easy to distribute

// Get it working
// Test
// Refactor
// Test
// Isolate bottlenecks
// If a piece of code is taking a while, make it performant

// CSS Clock
// JavaScript || jQuery plugin
  // Fancy Text
  // Image Slider
  // Console
// Portfolios


var color = "black";

(function ( $ ) {
  var color = "rebeccapurple";

  $.fn.makeRebeccaPurple = function () {
    this.css({
      color: color
    });
    return this;
  };
})( jQuery );


$.fn.addRandomNumber = function () {

  this.each(function () {
    var $currentListItem = $(this);
    var currentText = $currentListItem.text();
    $currentListItem.text( currentText + " - " + Math.random() );
  });

  return this;
};

$(document).ready(function () {

  $("li").makeRebeccaPurple().addRandomNumber();
  // $("li").addRandomNumber();

});
