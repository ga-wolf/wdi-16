// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
var celsius = 20;

// Convert it to fahrenheit and output "NN°C is NN°F".
var toFarenheit = celsius * 1.8 + 32;
console.log(celsius + "°C" + " is " + toFarenheit + "°F");

// Now store a fahrenheit temperature into a variable.
var farenheit = 20;

// Convert it to celsius and output "NN°F is NN°C."
var toCelsius = (farenheit - 32) / 1.8;
console.log(farenheit + "°F" + " is " + toCelsius + "°F");
