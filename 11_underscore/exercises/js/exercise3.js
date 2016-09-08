var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort", "", 0 ];


// Create an array of every five numbers between 30 and 101
var fives = _.range(2, 101, 5);
console.log(fives);

// Turn bumpyArr into one flat array (no nested arrays)

var flat = _.flatten(bumpyArr);
console.log(flat);

// Remove all of the falsey elements in the uncompactedArr

var compactedArray = _.compact(uncompactedArr);
console.log(compactedArray);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

var uniques = _.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]);
console.log(uniques);

// Find the index of the first element in numbers that is over 7 and is even

var numberTest = function(n) {
  return ((n > 7) && ((n % 2) === 0));
};

var index = _.findIndex(numbers, numberTest);

console.log(index);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// _.object would be useful, but when we pass two arrays into the _.object method, it will take the first array to be a list of keys, and the second array to be a list of values. So _.object(arrToTransform) would return {age: "location", NaN: "undefined"}.

// First, we'll have to use _.unzip to return a new series of arrays, where the first array is composed of the first element in each array, and the second array is composed of the second element in each array.
var unzipped = _.unzip(arrToTransform);

var transformed = _.object(unzipped);
console.table(transformed);
