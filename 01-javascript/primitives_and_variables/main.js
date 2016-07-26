// // Primitive Data Types
// // Strings
//
// console.log( "Hello World" );
// console.log( "It's a bag" );
// console.log( "The person says \"hi\"" );
//
// // Numbers
//
// console.log( 42 );
// console.log( 1.2 );
// console.log( -1000 );
// console.log( 4 + 2 );
// console.log( 5 - 2 );
// console.log( 4 * 2 ); // Multiplication
// console.log( 3 / 6 ); // Division
// console.log( 5 % 4 ); // The modulus operator (remainder)
//
// // Booleans
//
// console.log( true );
// console.log( false );
//
// // Undefined
//   // to be used by the browser
//
// console.log( undefined );
//
// // Null
//   // to be used by a programmer
//
// console.log( null );
//


// Variables

var x = 10;
console.log("The data contained in the variable x is:", x);

x = 5;
console.log("X has been updated, the new value is:", x);

var y;
console.log("The variable has been initialised:", y);

y = 10 * 2.5;
console.log("Y has been given a value:", y);

var name = "Badger"; // Declaration and assignment
var greeting = "Hello " + name; // Concatenation

console.log( greeting );

// Dynamic Typing (Loose typing)

var someValue = "Some string";
someValue = 42;
someValue = true;
someValue = null;
someValue = "Another string";

console.log( someValue );
