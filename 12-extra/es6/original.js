// VAR, LET, and CONST
  // var - global or function scope, can be redefined
  // let - block scoped, can be redefined
  // const - block scoped, can't be redefined

let sayHello = function () {
  var functionScopedVar = true;
  let blockScopedVar = true;

  if ( false ) {
    var anotherFunctionScopedVar = true;
    let anotherBlockScopedVar = true;
  }
  console.log( functionScopedVar, blockScopedVar );
  console.log( anotherFunctionScopedVar );
  console.log( anotherBlockScopedVar );
};

// sayHello();

// for ( let i = 0; i < 5; i++ ) {
//
//   setTimeout(function () {
//     console.log( i );
//   }, i * 100);
//
// }

// const sayHi = function ( name = "World" ) {
//   console.log( "Hi " + name );
// };
const sayHi = ( name = "World" ) => {
  // const greeting = "Hi " + name;
  const greeting = `Hi ${name}`;
  console.log( greeting );
};

sayHi();
sayHi( "Jane" );

const squareNum = (num) => num * num;
console.log( squareNum( 4 ) );

const arrOfNums = [2, 4, 6];

// let updatedNums = arrOfNums.map(function (n) {
//   return n * 5
// });
// let updatedNums = arrOfNums.map((n) => {
//   return n * 5
// });
let updatedNums = arrOfNums.map( (n) => n * 5 );

console.log( updatedNums );

const groucho = {
  firstName: "Groucho",
  lastName: "Marx",
  movie: "Duck Soup"
};

let { firstName: f, lastName: l, movie: m } = groucho;
console.log( f, l, m );

let { firstName, lastName, movie } = groucho;

const gummo = ["Gummo", "Marx", "Duck Soup"];
let [first, last, soup] = gummo;
console.log( first, last, soup );

const objGummo = {
  first,
  last,
  soup
};
console.log( objGummo );

class Shape {
  constructor(type) {
    console.log("A new shape was created", type);
  }
  sayHi() {
    console.log("A shape said hi?");
  }
}
const s = new Shape( "Rectangle" );

class Circle extends Shape {
  constructor(type) {
    super( `${type} Circle` ); // Calls the constructor of whatever this class inherits from
    console.log( type );
  }
  getCircumference() {

  }
}
const c = new Circle( "Large" );
