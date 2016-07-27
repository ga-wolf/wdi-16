// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (var i = 0; i <= 10; i++) {
    var result = i * 9;
    var message = i + " * 9 = " + result;
    console.log(message);
}



//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var calculateNumbers = function(min,max) {
    for (var i = min; i <= max; i++) {
        for (var j = min; j <= max; j++) {
            var result = j * i;
            var message = i + " * " + j + " = " + result;
            console.log(message);
        }
    }
};

calculateNumbers(1,10);
