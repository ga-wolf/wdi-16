// The Geometrizer
//
// Create 2 functions that calculate properties of a circle, using the definitions here.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var calcCircumference = function(radius) {
    var circumference = 2 * Math.PI * radius;
    var message = "The circumference is " + circumference;
    console.log(message);
    // I've created two different variables for circumference and message because I want to do two things - RETURN the circumference, so I can use the result in other functions, and CONSOLE.LOG a message to test that it's working properly.
    return circumference;
};

calcCircumference(3);


var calcArea = function(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    var message = "The area is " + area;
    console.log(message);
    return area;
};

calcArea(4);
