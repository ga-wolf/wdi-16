var doFirst = function () {

  window.setTimeout(function () {
    console.log("Do first");
  }, 1000);

};

var doSecond = function () {
  console.log("Do second");
};

doFirst();
doSecond();

var doFirst = function ( callback ) {
  window.setTimeout(function () {
    console.log("Do first");

    callback();
  }, 1000);
};

doFirst(function () {
  console.log("Do second");
  console.log("CHANGE THE HTML");
});

var totals = [ 92, 94, 86, 99, 100 ];

for ( var i = 0; i < totals.length; i += 1 ) {
  var currentScore = totals[i];
  console.log( currentScore + "!!!" );
}

var totals = [ 92, 94, 86, 99, 100 ];

var each = function ( collection, callback ) {

  for ( var i = 0; i < collection.length; i += 1 ) {
    var currentElement = collection[i];
    callback( currentElement );
  };

};

each(totals, function ( el ) {
  console.log("The current score is: " + el);
});

// each([1, 2, 3, 4, 5], alert);

var printOutScore = function ( num ) {
  console.log("Printing out score: " + num);
};

each( totals, printOutScore );

console.log("Start of main.js");
$(document).ready(function () {
  console.log("The page has loaded");

  $("h1").on("click", function () {
    $(this).text(  Math.random()  );
  });

  $("p").each(function () {
    $(this).text( Math.random() );
  });

});
console.log("End of main.js");
