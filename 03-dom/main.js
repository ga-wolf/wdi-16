// document.getElementById("someIDHere");

var heading = document.getElementById("mainHeading");
var p = document.getElementById("important");
var bill = document.getElementById("bill");

console.log( heading, p, bill );

// document.getElementsByTagName("someTag");

var allParagraphs = document.getElementsByTagName("p");
for ( var i = 0; i < allParagraphs.length; i += 1 ) {
  var currentParagraph = allParagraphs[i];

  currentParagraph.innerHTML = "Paragraph #" + (i + 1);
  // Change the inner HTML of the paragraphs on the page
    // e.g. "Paragraph #1"
  console.log( currentParagraph );
}

var allTodos = document.getElementsByClassName( "todo" );
for ( var i = 0; i < allTodos.length; i += 1 ) {
  var todo = allTodos[i];
  console.log( todo.innerHTML );
}
// Print to the console the text of each one of the todo items
  // For loop to iterate through everything that has the class of todo
    // For each todo item, use a property or method to access the current text
    // Log that to the console

var firstOrderedListItem = document.querySelector( "ol li" );
console.log( firstOrderedListItem );

var allOrderedListItems = document.querySelectorAll( "ol li" );
for ( var i = 0; i < allOrderedListItems.length; i += 1 ) {
  var listItem = allOrderedListItems[i];
  console.log( "Old text:", listItem.innerHTML );
  listItem.innerHTML = "Anything";
}




var bill = document.querySelector("img");

// When bill is clicked, I want to console.log something
  // Create an event handler
    // Event type
    // Callback

// Define a target, define the event type, define the callback
bill.addEventListener("click", function () {
  console.log("Bill was clicked");
  document.body.style.backgroundColor = "lightslategray";
});

var myHeading = document.querySelector("h1");

myHeading.addEventListener("click", function () {
  myHeading.style.color = "salmon";
});

// Define my target element
var myParagraph = document.querySelector("#important");

// Define my callback
var alertUser = function () {
  alert("You just clicked something");
};

// What event am I listening to? click
// Binding the event and the callback to the element
myParagraph.addEventListener( "click", alertUser );
// myParagraph.removeEventListener( "click", alertUser );


var body = document.body;

var showDetails = function ( event ) {
  var myMessage = "X: " + event.clientX + " Y: " + event.clientY;
  // console.log( myMessage );
};

// When the body is clicked, I want the browser to call showDetails
body.addEventListener( "mousemove", showDetails );



var allHeadings = document.querySelectorAll("h1, p, li");

var changeText = function ( e ) {
  var currentText = this.innerHTML;
  this.innerHTML = currentText.toUpperCase();
};

for ( var i = 0; i < allHeadings.length; i += 1 ) {
  var currentHeading = allHeadings[i];
  currentHeading.addEventListener( "click", changeText );
}

var clickCount = 0;
var target = document.querySelector("h2");

var updateClickCount = function (e) {
  clickCount += 1;
  document.querySelector("h2 span").innerHTML = clickCount;
};

target.addEventListener( "click", updateClickCount );

// Timers
  // window.setTimeout( callback, timeInMilliseconds ); - delay
  // window.setInterval( callback, timeInMilliseconds ); - regular
console.clear();
var delayedFunction = function () {
  // console.log("This won't happen immediately");
};

window.setTimeout( delayedFunction, 3000 );

var regularFunction = function () {
  // console.log( "This will happen regularly " + Math.random() );
};

window.setInterval( regularFunction, 2000 );


// What are you animating?
var bill = document.querySelector("img");

var updateBill = function () {
  var currentWidth = parseInt( bill.getAttribute("width") );
  var newWidth = currentWidth + 1;
  bill.setAttribute( "width", newWidth );
  console.log( currentWidth );
};

window.setInterval( updateBill, 5 );
// How regularly do you want to make changes? 100
// What are the actual changes?
