// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


// Create a function and store it in a variable called 'tellFortune'.
// Give that function four parameters - this means that, whenever we call the function, we should pass in 4 arguments, and then - inside the function - we'll give those arguments the names specified in the function's parameters, and refer to them using those names.
var tellFortune = function(children, partner, location, job) {
    var output = ("You will be a " + job + " in " + location + " and married to " + partner + " with " + children + " kids");
    console.log(output);
};

// We could call the function by passing in a bunch of strings and numbers, like this:
// tellFortune(2, "Kristy", "Sydney", "developer");

// ... but in some situations it's cleaner to store the values we want to pass into the function as variables, and then pass the variable names in as arguments in the function call.

// Here I'm going to use the window object's 'prompt' method - I can store whatever the user enters into the prompt in variables, which is handy.
var a = prompt("How many kids?");
var b = prompt("What's your partner's name?");
var c = prompt("Where do you work?");
var d = prompt("What's your job");

// Then I can pass those variables into the function as the function's arguments.
tellFortune(a,b,c,d);
