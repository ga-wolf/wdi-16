// We need to create the blueprint
  // We do this by extending Backbone's core components

// var Movie = Backbone.Model.extend({
//   defaults: {
//     title: "N/A",
//     duration: 0,
//     director: "N/A"
//   },
//
//   initialize: function () {
//
//     console.log( "You just created a new movie" );
//
//     this.on("change", function () {
//       console.log( "Something changed" );
//     });
//
//     this.on("change:title", function (model, newTitle) {
//       var oldTitle = model.previousAttributes().title;
//       var msg = "The old title was " + oldTitle + ", the new title is " + model.get("title");
//
//       console.log( msg );
//     });
//
//     this.on("change:duration change:director", function () {
//       console.log("Either the duration or the director changed");
//     });
//   }
// });
//
// // Create a piece of data using that blueprint
//
// var genericMovie = new Movie();
// console.log( genericMovie );
//
// var bestMovie = new Movie({
//   title: "Satantango",
//   director: "Bela Tarr",
//   duration: 450
// });
//
// var movieTitle = bestMovie.get( "title" );
// var movieDirector = bestMovie.get( "director" );
// var movieDuration = bestMovie.get( "duration" );
//
// console.log( movieTitle );
//
// var regularBestMovie = bestMovie.toJSON();
// console.log( regularBestMovie );
//
// var almostBestMovie = new Movie({
//   title: "Satan"
// });
//
// almostBestMovie.set({
//   title: "Satantango",
//   duration: 450
// });
//
// var mostRecentChanges = almostBestMovie.changedAttributes();
// console.log( mostRecentChanges );
//
// almostBestMovie.set("director", "Bela Tarr");
//
// console.log( almostBestMovie.toJSON() );
//
// var Movies = Backbone.Collection.extend({
//   model: Movie,
//
//   initialize: function () {
//     console.log( "A new collection of movies was created" );
//
//     this.on("add", function () {
//       console.log( "A movie was added" );
//     }); // collection.add( model ) or collection.add([modelOne, modelTwo])
//
//     this.on("remove", function () {
//       console.log("A movie was deleted");
//     }); // collection.remove( model ) or collection.remove([])
//   }
// });
//
// var movies = new Movies();
//
// var movieOne = new Movie();
// var moviesWithOne = new Movies( movieOne );
//
// var movieTwo = new Movie();
// var movieThree = new Movie();
// var multipleMovies = new Movies( [ movieTwo, movieThree ] );
//
// console.log( multipleMovies );
//
// var moviesWithObj = new Movies({
//   title: "The Man who knew Infinity"
// });
//
// console.log( moviesWithObj );
//
// var ourNewCollection = new Movies();
// ourNewCollection.add({});
//
// var movie = new Movie();
// ourNewCollection.add( movie );
//
// console.log( ourNewCollection );
//
// var ourMixedCollection = new Movies([
//   { quality: "Poor" },
//   { quality: "Poor" },
//   { quality: "Poor" },
//   { quality: "Good" },
//   { quality: "Good" }
// ]);
//
// console.log( ourMixedCollection.length );
//
// var poorMovies = ourMixedCollection.where({
//   quality: "Poor"
// });
// ourMixedCollection.remove( poorMovies );
//
// console.log( ourMixedCollection.length );
//
// var moviesWithIDs = new Movies([
//   { id: 200, title: "Satantango" },
//   { id: 201, title: "Toy Story" },
//   { id: 202, title: "Frozen" },
// ]);
//
// var movieWithID200 = moviesWithIDs.get( 200 ); // Retrieve by ID
//
// var movieAtIndexTwo = moviesWithIDs.at( 2 ); // Retrieve by index
//
// var toyStory = moviesWithIDs.findWhere({
//   title: "Toy Story"
// });
//
// var myMovies = new Movies();
// var movie = new Movie();
// myMovies.add([ {}, {}, {}, movie ]);
//
// myMovies.remove( movie );
// console.log( myMovies.length );
//
// var anonymousMovies = myMovies.where({ title: "N/A" });
// myMovies.remove( anonymousMovies );
//
// console.log( myMovies.length );
//
//


var Animal = Backbone.Model.extend({
  defaults: {
    stripes: 0,
    living: true,
    ecosystem: "",
    type: 'animal'
  },

  initialize: function () {
    console.log("A new animal was created");

    this.on("change", function () {
      console.log("An attribute was changed");
    });

    this.on("change:type", function () {
      console.log("The type was changed");
    });
  }
});

var kangaroo = new Animal();
kangaroo.set( "ecosystem", "Plains" );
kangaroo.set({
  pouch: true,
  tail: true,
  type: "Giant Kangaroo"
});

var kangarooAttributes = kangaroo.toJSON();
console.log( kangarooAttributes );

var butterfly = new Animal({
  type: "Monarch"
});

var badger = new Animal({
  type: "Badger"
});

var panda = new Animal({
  type: "Panda",
  id: 10
});



var Zoo = Backbone.Collection.extend({
  model: Animal,
  initialize: function () {
    console.log("A new zoo was created");

    this.on("add", function ( newAnimal ) {
      console.log("A new animal was brought to the zoo");
      console.log( "\tIt was a " + newAnimal.get("type") );
    });
  }
});

var gaZoo = new Zoo();

var bird = new Animal({
  type: "Eagle",
  living: false
});
var dumboOctopus = new Animal({
  type: "Dumbo Octopus"
});
var japaneseSpiderCrab = new Animal({
  type: "Japanese Spider Crab",
  living: false
});
var theGerenuk = new Animal({
  type: "Gerenky",
  living: false
});
var ayeAye = new Animal({
  type: "Animal"
});

gaZoo.add([ bird, dumboOctopus, japaneseSpiderCrab, theGerenuk, ayeAye ]);

gaZoo.each(function (animal) {
  console.log("There is a " + animal.get("type") + " in the GA zoo");
});

var allTypes = gaZoo.pluck("type");
console.log( allTypes );

var sortAnimalsByType = gaZoo.sortBy("type");
console.log( sortAnimalsByType );


// console.log( gaZoo.length );
// gaZoo.remove( ayeAye );
// console.log( gaZoo.length );
//
// // Remove all dead animals
// var allDead = gaZoo.where({
//   living: false
// });
// gaZoo.remove( allDead );


// Single Page Applications (SPA)
  // Represent the same stuff that our Rails views would do

var ZooView = Backbone.View.extend({
  el: "#app", // $("#app") - selects an existing element
    // this.el === document.getElementById("app")
    // this.$el === $("#app")

  events: {
    'click h1' : 'clickHeading',
    'click li' : 'accessAnimal',
    'click span': 'destroyAnimal'
  },

  destroyAnimal: function ( event ) {
    var $span = $( event.currentTarget );
    var $li = $span.parent();
    var txt = $li.text();

    var searchTerm = txt.replace(" | Delete", "");

    var animalToBeDestroyed = this.collection.findWhere({
      type: searchTerm
    });
    this.collection.remove( animalToBeDestroyed );
    console.log( this.collection.length );
  },

  accessAnimal: function ( event ) {
    var $currentEl = $( event.currentTarget );
    $currentEl.css({
      color: "red"
    });
  },

  clickHeading: function () {
    console.log("The heading was clicked");
  },

  initialize: function () {
    console.log("A new instance of the ZooView was created");

    this.listenTo( this.collection, 'add', this.render );
    this.listenTo( this.collection, 'remove', this.render );
  },

  render: function () {
    // console.clear();
    // console.log( "The current view", this );
    var appEl = this.$el; // var appEl = $("#app");
    appEl.html("<h1>The animals in our zoo</h1>");

    var $ul = $("<ul></ul>");
    this.collection.each(function (animal) {
      var $li = $("<li></li>");
      $li.text( animal.get("type") );

      var $span = $("<span> | Delete</span>");
      $li.append( $span );

      $ul.append( $li );
    });

    this.$el.append( $ul );
  }
});


// var animal = gaZoo.findWhere({
//   type: "Animal"
// });
// gaZoo.remove( animal );


// Models - represent one resource (one record in the User table)
// Collections - represent multiple resources (all users)
// Views - represent a collection or a model
// Routers - control which views are being represented at a given time

var Router = Backbone.Router.extend({
  routes: {
    '': 'showZoo', // Either no hash or a hash with nothing after it
    'animals/:id': 'showAnimal'
  },

  showAnimal: function ( id ) {
    $("#app").html( "<h1>Showing the animal with the id of " + id + "</h1>" );
  },

  showZoo: function () {

    var zv = new ZooView({
      collection: gaZoo // @collection = gaZoo
    }); // This will run the initialize method on the ZooView "class"
    zv.render();

  }
});

// console.clear();

var router = new Router(); // Only client-side URLs (hash fragments)

$(document).ready(function () {
  Backbone.history.start(); // Backbone will pay attention to the hash fragments
});

var goHome = function () {
  router.navigate("/", {
    trigger: true
  });
};

var goSeeAnAnimal = function ( id ) {
  router.navigate("/animals/" + id, {
    trigger: true
  });
};
