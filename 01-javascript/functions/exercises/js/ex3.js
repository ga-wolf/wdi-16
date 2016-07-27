// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// Takes 2 arguments: age, amount per day.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(age, amount) {
    var deathAge = 42;
    var food = "hotdogs";
    var daysLeft = (deathAge - age) * 365.2425;
    // I don't want to be sitting on my deathbed and need a bit more of a hotdog, so I'm going to round the days * the amount up to the nearest integer - I'm going to use the Math object's 'ceil' method for that.
    var numberOfFood = Math.ceil(daysLeft * amount);
    var result = "You will need " + numberOfFood + " " + food + " to last you until the ripe old age of " + deathAge;
    return result;
};

console.log(calculateSupply(32, 5));
