var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
var mappedObject = _.mapObject( objectToMap, function (val, key) {
  return val * _.random(1, 101);
});
console.log(mappedObject);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var pairs = _.pairs( objectToMap );
console.log( pairs );

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var flippedObject = _.invert( objectToMap );
console.log( flippedObject );

// Remove the "start" key from objectToMap in two different ways
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};
var first = _.pick( objectToMap, 'middle', 'end' ); // Whitelisting
var second = _.omit( objectToMap, 'start' );        // Blacklisting
console.log( first, second );
