// Make arrays
var emptyArr = [];

var alphabet = [ "a", "b", "c", "d", "e" ];
alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

var silly = [
  "",
  1,
  [ false ],
  undefined,
  true
];

// Accessing particular elements
  // The letter A
  console.log( alphabet[0] );
  // The letter F
  console.log( alphabet[5] );
  // The letter Z
  console.log( alphabet[ alphabet.length - 1 ] );
  // The array in the silly array
  console.log( silly[2] );
  // Bonus points for anyone who can get the false boolean out of silly
  console.log( silly[2][0] );

// Reassigning elements
  // a to A
  alphabet[0] = "A";
  // c to C
  alphabet[2] = "C";
  // undefined to null
  silly[3] = null;
  // false to true
  // silly[2][0] = true;
  silly[2][0] = !silly[2][0];

// Adding elements

var fruits = [ "Orange", "Mango", "Mandarin" ];
fruits[3] = "Grapes"; // Don't do it this way
fruits.push( "Watermelon" ); // At the end

fruits.unshift( "Kiwi Fruit" ); // At the start

console.log( fruits );

// Removing elements
fruits.pop(); // Remove the last element
fruits.shift(); // Remove the first element

console.log( fruits );

// Finding an item
var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

var badgerminIndex = weirdInstruments.indexOf("Badgermin");
console.log(badgerminIndex);

var pyroIndex = weirdInstruments.indexOf( "Pyrophone" );
console.log( pyroIndex );

var doesntExist = weirdInstruments.indexOf( "Roli Seaboard" );
console.log( doesntExist );

var checkExistence = function ( instrument ) {
  // if ( weirdInstruments.indexOf(instrument) >= 0 ) {
  //   console.log( "Yep, it's there" );
  // } else {
  //   console.log( "No, it's not" );
  // }

  if ( weirdInstruments.includes("Roli Seaboard") ) {
    console.log( "Yep, it's there" );
  } else {
    console.log( "No, it's not" );
  }
};

checkExistence( "Roli Seaboard" ); // => No, it's not
weirdInstruments.push( "Roli Seaboard" );
checkExistence( "Roli Seaboard" ); // => Yep, it's there

var fruits = [
  "Mango",
  "Orange",
  "Banana",
  "Apple",
  "Kiwi Fruit"
];
// Index of the banana
var bananaIndex = fruits.indexOf( "Banana" );

              // startIndex, how many items to remove
fruits.splice( bananaIndex, 1 );
console.log( fruits );
// slice, splice


// Copying arrays
// THE WRONG WAY - THESE TWO ARRAYS ARE LINKED
var arrOfNumbers = [ 1, 2, 3 ];
var newArrOfNums = arrOfNumbers;

newArrOfNums.push( 4 );

// THE RIGHT ARRAY
var arrOfNumbers = [ 1, 2, 3 ];
var newArrOfNums = arrOfNumbers.slice();
  // There is no link between these two

newArrOfNums.push( 4 );

// Looping through arrays
var arrOfFruits = [ "Orange", "Mango", "Mandarin", "Kiwi Fruit" ];

// How we access individual elements of an array
// How we could use something we already know to print them all out

for ( var i = 0; i < arrOfFruits.length; i += 1 ) {
  var currentFruit = arrOfFruits[i];
  console.log( "The current element is " + currentFruit );
}

var myFavouriteLetters = [ "A", "B", "C", "D", "E" ];

for ( var i = 0; i < myFavouriteLetters.length; i += 1 ) {
  var currentLetter = myFavouriteLetters[i];
  var message = "My #" + (i + 1) + " letter is " + currentLetter;
  console.log( message );
}
