// // Create a timer - window.setInterval
// // Select an element - document.querySelector
// // We need a function that will make bill wider
//
// var bill = document.querySelector(".bill");
// bill.style.width = "200px"; // Starting point for our animation
//
// var makeBillFat = function () {
//   // Store a reference to the current width
//   var currentWidth = parseFloat( bill.style.width );
//   console.log( "Current width:", currentWidth );
//   // Add some value to that
//   var newWidth = currentWidth + 1;
//   console.log( "New width:", newWidth );
//   // Change the value on the element in question
//   bill.style.width = newWidth + "px";
// };
//
// // window.setTimeout( makeBillFat, 1000 );
// // window.setInterval( makeBillFat, 10 );
//
// // After I click the img, set the timer
// bill.addEventListener("click", function () {
//   window.setInterval( makeBillFat, 10 );
// });

// var bill = document.querySelector(".bill");
// var timerID = null; // Keep track of the animation
// bill.style.opacity = 1.0; // Giving a starting point to the animation
//
// var fadeBill = function () {
//   // console.log("The fadeBill function ran");
//   // Access the old value
//   var oldOpacity = parseFloat( bill.style.opacity ); // Caching the value
//   if ( oldOpacity <= 0 ) {
//     window.clearInterval( timerID ); // Stop the timer and the animation
//     return false;
//   }
//   // Alter that value
//   var newOpacity = oldOpacity - 0.01;
//   // Assign it
//   bill.style.opacity = newOpacity;
// };
//
// timerID = window.setInterval( fadeBill, 50 );
// console.log( timerID );

// Store a reference to bill as a DOM node
var bill = document.querySelector(".bill");

// Give a starting point to the animation
bill.style.position = "fixed";
bill.style.top = "0px";
bill.style.left = "0px";

// Set up a variable that will eventually reference the timer
var timerID = null;

// Create a function that will be used as a callback
var moveBill = function () {
  console.log("Move bill ran");
  var cachedTop = parseFloat( bill.style.top );
  if ( cachedTop >= 200 ) {
    window.clearInterval( timerID );
    return false;
  }
  // console.log( cachedTop );
  var newTop = cachedTop + 1;
  // console.log( newTop );
  bill.style.top = newTop + "px";
};

// Create the timer, saving the timerID into a variable
timerID = window.setInterval( moveBill, 10 );
console.log( timerID );
