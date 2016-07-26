// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//

// Store the current year in a variable.
var currentYear = 2016;

// Store their birth year in a variable.
var birthYear = 1982;

// Calculate their 2 possible ages based on the stored values.
var maxAge = currentYear - birthYear;
var minAge = maxAge - 1;

// Output them to the screen like so: "They are either NN or NN", substituting the values.
var age = "They are either " + minAge + " or they are " + maxAge;
console.log(age);
