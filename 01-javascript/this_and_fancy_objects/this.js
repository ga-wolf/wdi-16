// // Global Binding
//
// console.log( this );
//
// var randomFunction = function () {
//   console.log( this );
// };
//
// randomFunction();
//
// var addTwoNumbers = function (x, y) {
//   var result = x + y;
//   console.log( this );
//   return result;
// };
//
// addTwoNumbers( 5, 4 );
//
//
// // Implicit Binding
//
// var groucho = {
//   name: "Groucho",
//   speak: function () {
//     console.log("Hello, I'm " + this.name);
//   }
// };
//
// groucho.speak();
//
// var harpo = {
//   name: "Harpo",
//   speak: function () {
//     console.log("Hello, I'm " + this.name);
//   }
// };
//
// harpo.speak();
//
// var chico = {
//   name: "Chico",
//   speak: function () {
//     console.log("Hello, I'm " + this.name);
//   }
// };
//
// chico.speak();
//
//
// var satantango = {
//   type: "Movie",
//   name: "Satantango",
//   duration: 432,
//   director: "Bela Tarr",
//   displayDetails: function () {
//     console.log( this );
//     console.log("Type: " + this.type);
//     console.log("Name: " + this.name);
//     console.log("Director: " + this.director);
//     console.log("Duration: " + this.duration);
//   }
// };
//
//
// satantango.displayDetails();
//
// // Explicit Binding
//
// var sayHello = function () {
//   console.log( "Hello, I'm " + this.name );
// };
// var person1 = {
//   name: "Groucho",
//   sayHello: function () {
//     console.log( this );
//   }
// };
// var person2 = {
//   name: "Harpo"
// };
// var person3 = {
//   name: "Zeppo"
// };
// var person4 = {
//   name: "Chico"
// };
//
// // sayHello(); // Global Binding
// // person1.sayHello(); // Implicit Binding
//
// sayHello.call( person1 ); // Explicit Binding
// sayHello.call( person2 ); // Explicit Binding
// sayHello.call( person3 ); // Explicit Binding
// sayHello.apply( person4 ); // Explicit Binding
//
// var person1SaysHello = sayHello.bind( person1 );
// person1SaysHello();
//
// var personTwoSaysHi = sayHello.bind( person2 );
// personTwoSaysHi();
//
// var randomPersonSaysHi = sayHello.bind({ name: "Anyone" });
// randomPersonSaysHi();
//
//
//
// var explicitAddTwoNumbers = function () {
//   var result = this.numOne + this.numTwo;
//   console.log(result);
//   return result;
// };
// var firstSet = {
//   numOne: 5,
//   numTwo: 8
// };
// var secondSet = {
//   numOne: 5,
//   numTwo: 11
// };
// var thirdSet = {
//   numOne: 7,
//   numTwo: 11
// };
// // Call explicitAddTwoNumbers in three different ways (one for each set of numbers)
//   // One example of .bind
//   var setOneBound = explicitAddTwoNumbers.bind( firstSet );
//   setOneBound();
//
//   // One example of .call
//   explicitAddTwoNumbers.call(secondSet);
//
//   // One example of .apply
//   explicitAddTwoNumbers.apply(thirdSet);
//
// // Difference between .apply and .call
// var max = Math.max( 10, 20 );
// console.log( max );
//
// var arrOfNumbers = [ 42, 15, 21521, 1251251 ];
// var wontWork = Math.max( arrOfNumbers );
// console.log( wontWork );
//
// var willWork = Math.max.apply( Math, arrOfNumbers );
// console.log( willWork );

// new Binding

var Person = function (name, occupation) {
  // When the new keyword comes before a function call, the keyword this will be assigned a new empty object as its value
  this.name = name; // Instance variables
  this.occupation = occupation;
  this.eat = function () { // Instance methods
    console.log( this.name + " is currently eating" );
  };
  this.drink = function () {
    console.log( this.name + " is currently drinking" );
  };
  this.talk = function () {
    console.log( "Hello" );
  };
  this.work = function () {
    var message = this.name + " is an " + this.occupation;
    console.log( message );
  };
  // Drink, work (and I want to show the correct occupation ), talk
  return this;
};

var billMurray = new Person( "Bill Murray", "Actor" );
billMurray.eat();
  // Bill Murray is an actor

var badger = new Person( "Badger", "Teacher" );
  // Keyword this will be assigned to an empty object
badger.eat();
  // Badger is a teacher

var ian = new Person( "Ian Lenehan", "Developer at Blake Education" );
ian.eat();
  // Ian is a developer

var AnimalFactory = function () {
  var animal = {};
  animal.type = "Animal";
  animal.alive = true;
  animal.beAlive = function () {
    console.log("Somehow live");
  };
  return animal;
};
var genericAnimal = AnimalFactory();

var DogFactory = function (name, breed) {
  var dog = AnimalFactory();
  dog.type = "Dog";
  dog.name = name;
  dog.legs = 4;
  dog.breed = breed;
  dog.eat = function () {
    console.log( dog.name + " is currently eating");
  };
  return dog;
};

var tammy = DogFactory( "Tammy", "Tamaskan" );
tammy.beAlive();
var buddy = DogFactory( "Buddy", "Labrador" );

// How do we figure out what ` this ` is?
  // Is there a .call, .apply or .bind evident? Explicit binding
    // If so, ` this ` is equal to whatever was passed in
  // Is the new keyword evident before the function name? new binding
    // If so, ` this ` is equal to a new, empty object
  // Is the function a method on an object? Implicit binding
    // If so, ` this ` will be the object in question
  // Otherwise, ` this ` will be the window - global binding

// Create a factory heirachy for this structure
//   User - name, gender, email
//     Admin - admin (true), postArticle()

var UserFactory = function ( name, gender, email ) {
  var user = {};
  user.name = name;
  user.gender = gender;
  user.email = email;
  return user;
};
var userOne = UserFactory("Roger", "Female", "cokezero@ga.co");

var AdminFactory = function ( name, gender, email ) {
  var admin = UserFactory( name, gender, email );
  admin.admin = true;
  admin.postArticle = function () {
    console.log( "Article posted" );
  };
  return admin;
};
var admin = AdminFactory( "Badger", "Unknown", "badger@ga.co" );





var Dog = function ( name, breed ) {
  this.name = name;
  this.breed = breed;
  return this;
};

var tammy = new Dog( "Tammy", "Tamaskan" );

var Boat = function ( brand, length ) {
  this.brand = brand;
  this.length = length;
  return this;
};

var b = new Boat( "Cruise Craft", 27 );




var Vehicle = {
  type: "Vehicle",
  transport: true,
  makeMove: function () {
    console.log("Currently moving", this);
  }
};
Vehicle.makeMove();

var Car = Object.create( Vehicle );
Car.brand = "Jag";
Car.year =  1963;
Car.type = "E-type mk 3";
Car.noteForBadger = function () {
  console.log("Great end of course present, buddy");
};

console.log( Car.transport );
Car.makeMove();
