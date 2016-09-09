// We need to create the blueprint
  // We do this by extending Backbone's core components

var Movie = Backbone.Model.extend({
  defaults: {
    title: "N/A",
    duration: 0,
    director: "N/A"
  },

  initialize: function () {

    console.log( "You just created a new movie" );

    this.on("change", function () {
      console.log( "Something changed" );
    });

    this.on("change:title", function (model, newTitle) {
      var oldTitle = model.previousAttributes().title;
      var msg = "The old title was " + oldTitle + ", the new title is " + model.get("title");

      console.log( msg );
    });

    this.on("change:duration change:director", function () {
      console.log("Either the duration or the director changed");
    });
  }
});

// Create a piece of data using that blueprint

var genericMovie = new Movie();
console.log( genericMovie );

var bestMovie = new Movie({
  title: "Satantango",
  director: "Bela Tarr",
  duration: 450
});

var movieTitle = bestMovie.get( "title" );
var movieDirector = bestMovie.get( "director" );
var movieDuration = bestMovie.get( "duration" );

console.log( movieTitle );

var regularBestMovie = bestMovie.toJSON();
console.log( regularBestMovie );

var almostBestMovie = new Movie({
  title: "Satan"
});

almostBestMovie.set({
  title: "Satantango",
  duration: 450
});

var mostRecentChanges = almostBestMovie.changedAttributes();
console.log( mostRecentChanges );

almostBestMovie.set("director", "Bela Tarr");

console.log( almostBestMovie.toJSON() );

var Movies = Backbone.Collection.extend({
  model: Movie,

  initialize: function () {
    console.log( "A new collection of movies was created" );

    this.on("add", function () {
      console.log( "A movie was added" );
    });
  }
});

var movies = new Movies();

var movieOne = new Movie();
var moviesWithOne = new Movies( movieOne );

var movieTwo = new Movie();
var movieThree = new Movie();
var multipleMovies = new Movies( [ movieTwo, movieThree ] );

console.log( multipleMovies );

var moviesWithObj = new Movies({
  title: "The Man who knew Infinity"
});

console.log( moviesWithObj );

var ourNewCollection = new Movies();
ourNewCollection.add({});

var movie = new Movie();
ourNewCollection.add( movie );

console.log( ourNewCollection );

var ourMixedCollection = new Movies([
  { quality: "Poor" },
  { quality: "Poor" },
  { quality: "Poor" },
  { quality: "Good" },
  { quality: "Good" }
]);

console.log( ourMixedCollection.length );

var poorMovies = ourMixedCollection.where({
  quality: "Poor"
});
ourMixedCollection.remove( poorMovies );

console.log( ourMixedCollection.length );

var moviesWithIDs = new Movies([
  { id: 200, title: "Satantango" },
  { id: 201, title: "Toy Story" },
  { id: 202, title: "Frozen" },
]);

var movieWithID200 = moviesWithIDs.get( 200 ); // Retrieve by ID

var movieAtIndexTwo = moviesWithIDs.at( 2 ); // Retrieve by index

var toyStory = moviesWithIDs.findWhere({
  title: "Toy Story"
});

//
// var Animal = Backbone.Model.extend({
//   defaults: {
//     stripes: 0,
//     living: true,
//     ecosystem: "",
//     type: 'animal'
//   },
//
//   initialize: function () {
//     console.log("A new animal was created");
//
//     this.on("change", function () {
//       console.log("An attribute was changed");
//     });
//
//     this.on("change:type", function () {
//       console.log("The type was changed");
//     });
//   }
// });
//
// var kangaroo = new Animal();
// kangaroo.set( "ecosystem", "Plains" );
// kangaroo.set({
//   pouch: true,
//   tail: true,
//   type: "Giant Kangaroo"
// });
//
// var kangarooAttributes = kangaroo.toJSON();
// console.log( kangarooAttributes );
//
// var butterfly = new Animal({
//   type: "Monarch"
// });
//
// var badger = new Animal({
//   type: "Badger"
// });
//
// var panda = new Animal({
//   type: "Panda",
//   id: 10
// });
