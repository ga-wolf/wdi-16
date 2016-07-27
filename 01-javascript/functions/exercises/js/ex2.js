// The Age Calculator
//
// Forgot how old you are? Calculate it!
//
// Write a function named calculateAge that:
//
// Takes 2 arguments: birth year, current year.
// Calculates the 2 possible ages based on those years.
// Outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// Create a function, and store it in variable called "calculateAge".

// Give the function two parameters - let's make them nice and descriptive; remember, you aren't a computer, so don't act like one.
var calculateAge = function(birthYear, currentYear) {
    // Take whatever two arguments were passed into the function, and perform operations on them
    var maxAge = currentYear - birthYear;
    var minAge = currentYear - birthYear - 1;
    // While we could have just returned the value on the right hand side of the assignment operator below (without storing it in a variable), I like storing the result in a variable before returning it.
    var result = "You are either " + minAge + " or " + maxAge;
    return result;
};

// Because our function actually returns something, I don't need a 'console.log' in my function. Instead, I'm going to call the function, passing in two values, and pass them into the console's log method.
console.log(calculateAge(1982, 2016));
