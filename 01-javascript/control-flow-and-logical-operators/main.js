console.log("Hello World");

// FORMAT OF AN IF STATEMENT
// if ( condition ) {
//   // Code to execute
// }

// FORMAT OF AN IF/ELSE STATEMENT
// if ( condition ) {
//   // Code to execute if the condition is truthy
// } else {
//   // Code to execute if the condition is falsey
// }

// FORMAT OF AN IF/ELSE IF/ELSE STATEMENT
// if ( someCondition ) {
//   // Code to execute if someCondition is considered truthy
// } else if ( someOtherCondition ) {
//   // Code to execute if someOtherCondition is considered truthy
// } else {
//   // Otherwise, execute this code
// }

var cond = true === true;
if ( cond ) {
  console.log("That seems obvious");
}

var myAge = 16;
if ( myAge >= 18 ) {
  console.log("You can drink");
}

var x = 15;
var y = 20;

if ( x * 2 === y ) {
  console.log("y is double x");
} else {
  console.log("y is not double x");
}

// If the value of X when multiplied by two is equal to the value of y
  // Print to the console, "y is double"
  // Otherwise, print to the console "it's not double"

// && : LOGICAL AND
// || : LOGICAL OR
// ! : LOGICAL NOT

var myName = "Wolf";
var myOccupation = "Teacher";

// If the name is Wolf and the occupation is Teacher
if ( myName === "Wolf" && myOccupation === "Teacher" ) {
  console.log("You probably work at GA");
} else {
  console.log("I'm not sure what or who you are");
}
  // Print out that you probably work at GA

// Pseudo-coding time

var personsAge = 16;
var youthfulHacker = true;

if ( personsAge > 18 || youthfulHacker ) {
  console.log("You can visit the site");
} else {
  console.log("Go to myLittlePony.com");
}

// If a person is over 18 or a youthful hacker
  // Print out you can visit the site
  // Otherwise, print out go to myLittlePony.com

var personsName = "The Blade";
var personsOccupation = "Ping Pong Player";

if ( personsName === "The Blade" && personsOccupation === "Teacher" ) {
  console.log( "Good choice" );
} else if ( personsName === "The Blade" && personsOccupation === "Ping Pong Player" ) {
  console.log( "Really horrible choice for you" );
} else {
  console.log( "I don't know who you are, I don't know what you want" );
}
// If the persons name is The Blade and the occupation is Teacher
  // Output "Good choice"
// If the persons name is The Blade and the occupation is Ping Pong Player
  // Really horrible choice for you
// Otherwise
  // I don't know who you are, I don't know what you want

var myAge = 42;

if ( myAge > 35 ) {
  console.log("You can vote AND hold any place in Government");
} else if ( myAge > 25 ) {
  console.log("You can vote AND run for the senate");
} else if ( myAge > 18 ) {
  console.log("You can vote");
} else {
  console.log("You have no voice in Government");
}
// If the age is over 35
  // Print you can vote and hold any place in Government
// Else if the age is over 25
  // Print you can vote and run for the senate
// Else if the age is over 18
  // Print you can vote
// Otherwise, print you have no voice in Government


// COMPARISON OPERATORS
  // === - strict equality
  // == - loose equality
  // !== - strict inequality
  // != - loose inequality
  // > - greater than
  // >= - greater than or equal to
  // < - less than
  // <= - less than or equal to

// LOGICAL OPERATORS
  // && - Logical AND
  // || - Logical OR
  // !  - Logical NOT (negation operator)

// BASIC STRUCTURE OF STATEMENTS
  // if ( condition ) {
  //
  // } else if ( otherCondition ) {
  //
  // } else {
  //
  // }
