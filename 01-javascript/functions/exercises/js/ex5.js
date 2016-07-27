// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsiusToFahrenheit = function(c) {
    var f = c * 1.8 + 32;
    var message = c + "°C is " + f + "°F";
    console.log(message);
    return f;
};

var fahrenheitToCelsius = function(f) {
    var c = (f - 32) / 1.8;
    var message = f + "°F is " + c + "°C";
    console.log(message);
    return c;
};

celsiusToFahrenheit(23);

fahrenheitToCelsius(75);
