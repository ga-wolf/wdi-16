// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
var currentAge = 33;

// Store a maximum age into a variable.
var maxAge = 41;

// Store an estimated amount per day (as a number).
var hotDogs = 10;

// Calculate how many you would eat total for the rest of your life.
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365.2425;
var totalHotDogs = daysRemaining * hotDogs;
var totalHotDogs = Math.ceil(daysRemaining * hotDogs);

// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var hotDogsRequired = "You will need " + totalHotDogs + " to last you until the ripe old age of " + maxAge;

console.log(hotDogsRequired);
