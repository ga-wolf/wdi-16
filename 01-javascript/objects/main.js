// Create them
var emptyObj = {};

var bestMovie = {
  name: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var duration = bestMovie.duration;
var name = bestMovie.name;
var director = bestMovie["director"];

console.log( duration, name, director );

var bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
  ]
};

// Log out the name and the author
console.log( bookSeries.name, bookSeries.author );
console.log( bookSeries.producer );
// Iterate through all of the books

for ( var i = 0; i < bookSeries.books.length; i += 1 ) {
  var currentBookName = bookSeries.books[i];
  console.log( currentBookName );
}

var movie = {
  name: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

movie.director = "Béla Tarr"; // Reassigned the director key's value
console.log( movie.director );

movie.language = "Hungarian"; // Added new values
movie.rating = 1204102401290491204921;
console.log( movie );

var bestCamera = {
  brand: "Leica",
  model: "M3",
  year: 1955,
  memoryCard: "SD"
};

for ( var prop in bestCamera ) {
  // Print out each value in the bestCamera object
  // bestCamera["brand"];
  var val = bestCamera[ prop ];
  console.log( val );
}

// Iterate through the values of the bestCamera in another way
var allKeys = Object.keys(bestCamera);

for ( var i = 0; i < allKeys.length; i += 1 ) {
  var currentProp = allKeys[i];
  var currentVal = bestCamera[currentProp];
  console.log( currentVal );
}

console.log( bestCamera );
// bestCamera.memoryCard = null;
delete bestCamera.memoryCard;
console.log( bestCamera );

// Nested objects
var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  birth: {
    day: 11,
    month: 6,
    year: 1910
  }
};

var firstName = explorer.firstName;
var birthDetails = explorer.birth;
var birthYear = explorer.birth.year;
console.log( birthYear );

// Our own methods
var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayPurpose: function () {
    console.log( "Hello World" );
  }
};

console.log( explorer.firstName, explorer.lastName );

explorer.displayPurpose();

var marxFamily = [
  { name: "Groucho", birthYear: 1890 },
  { name: "Harpo", birthYear: 1888 },
  { name: "Chico", birthYear: 1887 },
  { name: "Zeppo", birthYear: 1901 },
  { name: "Gummo", birthYear: 1893 }
];

for (var i = 0; i < marxFamily.length; i += 1) {
  var marxBrother = marxFamily[i];
  console.log( marxBrother.name, marxBrother.birthYear );
}

// Our first intro the keyword this
var jacques = {
  firstName: "Jacques",
  lastName: "Cousteau",
  occupation: "Explorer",
  status: "Legendary",
  displayPurpose: function () {
    console.log( "Hello World" );
  },
  displayFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    console.log(fullName);
  },
  displayOccupationAndStatus: function () {
    var purpose = this.status + " " + this.occupation;
    console.log( purpose );
  }
};

jacques.displayFullName();
jacques.displayOccupationAndStatus();
