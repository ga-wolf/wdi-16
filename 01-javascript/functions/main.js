var sayHelloWorld = function () {
  console.log("Hello World");
};

sayHelloWorld();
sayHelloWorld();
sayHelloWorld(); // CMND + SHIFT + D - duplicate line

// multiplyFiveByFive(); // This doesn't work

var multiplyFiveByFive = function () {
  console.log( 5 * 5 );
}; // Function expression

multiplyFiveByFive();
multiplyFiveByFive();

makeSilentNoise(); // Function hoisting
function makeSilentNoise () {
  console.log("...");
}; // Function declaration
makeSilentNoise();



var sayHello = function ( name ) {
  var greeting = "Hello " + name; // Concatenation
  console.log( greeting );
};

sayHello( "World" ); // Passing parameters or arguments
sayHello( "Jane" );
// sayHello();

var squareNumber = function ( x ) {
  var result = x * x; // Math.pow(x, 2);
  console.log( result );
};

// squareNumber();
squareNumber( 4 );
squareNumber( 16 );
squareNumber( 20000 );

var addTwoNumbers = function ( x, y ) {
  console.log( "X is:", x );
  console.log( "Y is:", y );
  var result = x + y;
  return result;
};

addTwoNumbers(); // => NaN
addTwoNumbers( 5 ); // => NaN
var fourPlusTwo = addTwoNumbers( 4, 2 ); // 6
console.log( fourPlusTwo );

var weirdResult = addTwoNumbers( 100, addTwoNumbers(200, 20) );
console.log( weirdResult );

var whatDoesReturnDo = function () {
  console.log("This should run");
  return 42; // This will leave the function (won't execute further code)
  console.log("Should this?"); // Definitely shouldn't
};

var res = whatDoesReturnDo();
console.log( res );


var aBasicFunction = function () {
  console.log("This is reusable");
};

// console.log( aBasicFunction );
aBasicFunction(); // Please execute (or run) whatever is stored in the aBasicFunction variable

// We can introduce something dynamic to each function
  // Parameters or arguments

// Hello Jane
// Hello World
// Hello anything
var greet = function ( name ) {
  console.log("Hello " + name);
};

greet();
greet("Jane");
greet("World");
greet("anything");


// A want a set of code that takes three numbers
  // Add all of the numbers together
  // Give it back so you could save the result in a variable or chain operations

var addThreeNumbers = function (x, y, z) {
  var result = x + y + z;
  return result;
  console.log("Should this run?");
};

var res = addThreeNumbers(5, 6, 10);
console.log( res );

// somethingVeryGlobal, ourFirstContainer, somethingGlobal, ourSecondContainer, somethingLocal

var somethingVeryGlobal = "Very Global";

var ourFirstContainer = function () {
  var somethingGlobal = "Global";

  var ourSecondContainer = function () {
    var somethingLocal = "Local";

  };
  ourSecondContainer();

  console.log( somethingVeryGlobal, ourFirstContainer, somethingGlobal, ourSecondContainer );
};

// ourFirstContainer();
// somethingVeryGlobal, ourFirstContainer
// console.log( somethingVeryGlobal, ourFirstContainer );




var firstNumber = 1;

var trapSecondNumber = function () {
  var secondNumber = 2;

  var trapThirdNumber = function () {
    var thirdNumber = 3;
  };
};
trapSecondNumber();

// console.log( firstNumber, secondNumber, thirdNumber );


var addTwoNumbers = function (x, y) {
  return x + y;
};

var firstNumber = 10;

addTwoNumbers( firstNumber, 4 );
addTwoNumbers( firstNumber, 6 );
