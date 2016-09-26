$(document).ready(function () {

  var updateDashboard = function (data) {
    $("p.lotto").text( data.luckyNumbers );
    $("p.uptime").text( data.uptime );
    $("p.fortune").text( data.fortune );
    $("h2.currentTime").text( data.currentTime );
  };

  var fetchInfoForDashboard = function () {
    $.ajax({
      url: "/info",
      type: "GET",
      dataType: "JSON"
    }).done( updateDashboard );
  };

  fetchInfoForDashboard();

  window.setInterval(function () {
    fetchInfoForDashboard();
  }, 5000);

  $("#lucky button").on("click", function () {

    $("#lucky p").load( "/lotto_numbers", function () {
      console.log("The data was successfully loaded");
    });

  });

  $("#uptime button").on("click", function () {

    $.ajax({
      url: "/uptime",
      type: "GET",
      dataType: "TEXT"
    }).done(function (data) {
      var uptime = data;
      $("#uptime p").prepend( "<br />" ).prepend( uptime );
    });

  });

  $("#fortune button").on("click", function () {

    $.ajax({
      url: "/fortune",
      type: "GET",
      dataType: "TEXT"
    }).done(function (fortune) {
      $("#fortune p").text( fortune );
    });

  });

});
