// Starting Point
// Condition - race condition
// Increments - get closer to the end

// I want you to run something 10 times
  // Everytime it runs, we need to reduce the number

var num = 3;
while ( num >= 0 ) {
  console.log( num );
  num -= 1;
}
console.log("Blast off!");

var counter = 0;
// Create a loop that will count to 20, and then stop
  // Bonus points for logging only even numbers
while ( counter <= 20 ) {
  console.log( counter );
  counter += 1;
}


// FOR LOOPS

// Starting point, ending condition, step or increment
for ( var i = 10; i >= 0; i -= 1 ) {
  console.log( i );
}
console.log("Blast off!");

// Using a for loop
  // Print out every five numbers from zero up to 100
// Bonus: make it flexible (every five numbers up to 200, or 300, or 10)

var printEveryFiveNumbers = function ( upperLimit ) {
  for ( var i = 0; i <= upperLimit; i += 5 ) {
    console.log( i );
  }
};

printEveryFiveNumbers( 10 );


var findFirstNumDivisibleBySeven = function () {

  for ( var i = 1; i <= 20; i += 1 ) { // Loop or an iterator
    console.log("An iteration of the loop ran");
    if ( i % 7 === 0 ) {
      console.log("We found it!");
      break;
    }
  }

};

findFirstNumDivisibleBySeven();
