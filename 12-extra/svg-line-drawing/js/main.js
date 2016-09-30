$(document).ready(function () {
  var firstPath = $("#svg_5").get(0);
  var firstPathLength = firstPath.getTotalLength();

  var secondPath = $("#svg_1").get(0);
  var secondPathLength = secondPath.getTotalLength();

  $("#svg_1").css({
    "stroke-dasharray": secondPathLength,
    "stroke-dashoffset": secondPathLength
  });

  $("#svg_5").css({
    "stroke-dasharray": firstPathLength,
    "stroke-dashoffset": firstPathLength
  });

  $("svg").css("opacity", 1);

  // $("path").addClass("complete");

  $("#svg_5").animate({
    "stroke-dashoffset": 0
  }, 3000, function () {

    $("#svg_1").animate({
      "stroke-dashoffset": 0
    }, 3000);

  });

});
