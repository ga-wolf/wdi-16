// jQUERY PATTERNS

// ##########################
// ##### DOCUMENT.READY #####
// ##########################

// Wrap all your UI-related JavaScript in a document.ready function.
$(document).ready(function() {

// #################################################
// ##### USE $ PREFIX TO DENOTE jQUERY OBJECTS #####
// #################################################

  // Prefix variables that represent jQuery objects with a $ symbol. This reminds you (and other developers) that this is a jQuery object, with all of jQuery's fancy methods available to it.
  $p = $("p");

  // ########################################################
  // ##### EVENT HANDLERS - ANONYMOUS v NAMED FUNCTIONS #####
  // ########################################################

  // Event handlers can either call anoymous functions or named functions. Anonymous functions are fine...
    // $p.on("click", function() {
    //   $(this).css("backgroundColor", "gainsboro");
    // });

  // ...but named functions are re-usable! Here's a named function...
  var changer = function() {
    $(this).css("backgroundColor", "gainsboro");
  };


  // ...and an event handler that calls that function...
  $p.on("click", changer);


  // ###########################
  // ##### METHOD CHAINING #####
  // ###########################

  // jQuery lets us chain methods together. So, this:

  var getElementSlowly = function() {
    var $newPara = $("<p></p>");
    $newPara.html("Generated Text");
    $newPara.attr("class", "new-para");
    $(".container").append($newPara);
  };

  // ...is the same as this:
  var generateElement = function() {
    $("<p>").html("Generated Text").attr("class", "new-para").appendTo(".container");
  };

  var sexify = function() {
    $(this).css({
      "textTransform": "uppercase",
      "backgroundColor": "red"
    }).html("sexy").animate({
      "font-size": "30px",
      "border-width": "15px",
      "letter-spacing": "20px"
    }, 500, function() {
      $(this).animate({
        "letter-spacing": "2px"
      },3000);
    });
  };

  // ############################
  // ##### EVENT DELEGATION #####
  // ############################

  // Our newPara elements created by the 'generateElements' function will not have any event listeners created using the $("p") selector attached to them. Why? Because when the JavaScript was parsed by the browser, and event listeners attached to elements, those elements didn't even exist yet.

  // What's the solution? Bind the listener to an ancestor, and filter for the element to which the listener should apply. If three arguments are passed into an event listener, the second will be a selector filter. ie - the browser will listen for clicks on the ".container" element, but the 'changer' will only be called if $(this) was a p tag.
  $(".container").on("click", ".new-para", sexify);

  $("button").on("click", generateElement);

});
