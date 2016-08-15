// ARRAYS REVISION

// Creating an array - array literal syntax
var arr = ["z", "r", "d"];

// Getting elements in an array
console.log(arr[0]);
// => "z"

// Setting elements in array
arr[0] = "x";
// => ["x", "r", "d"]

// PUSH - Add an element to the end of an array
arr.push("e");
// => ["x", "r", "d", "e"]

// POP - Remove the element at the end of an array
arr.pop();
// => ["x", "r", "d"]

// UNSHIFT - Add an element to the start of an array
arr.unshift("a");
arr.unshift("g");
// => ["g", "a", "x", "r", "d"]

// SHIFT - Removing the element at the start of an array
arr.shift();
// => ["a", "x", "r", "d"]

// SPLICE - Add element to a particular index in the array (without replacing the element at that index)
arr.splice(1, 0, "b");
// => ["a", "b", "r", "d"]

// SPLICE - Replace an element at a particular index in the array
arr.splice(2, 1, "c");
// => ["a", "b", "c", "d"]

// SPLICE - Delete an element at a particular index in the array
arr.splice(1,1);
// => ["a", "c", "d"]

var newArray = ["one", "two", "three", "four", "five"];

// INDEXOF - Get the element at a particular index
var i = newArray.indexOf("three");
console.log(i);
// => 2

// INDEXOF and SPLICE - Find the index of an element in an array and remove it from the array
newArray.splice(newArray.indexOf("three"), 1);
// => ["one", "two", "four", "five"]


// Nested arrays
var nestedArray = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];

// Accessing elements in the outer array
console.log(nestedArray[1]);
// => ["d", "e", "f"]

// Accessing elements in a nested array
console.log(nestedArray[1][1]);
// => "e"

// Iterating over nested arrays
for (var i = 0; i < nestedArray.length; i++) {
 for (var j = 0; j < nestedArray[i].length; j++) {
  console.log(nestedArray[i][j]);
 }
}
// => "a"
// => "b"
// => "c"
// => "d"
// => "e"
// => "f"
// => "g"
// => "h"
// => "i"

// ARRAY COMPARISON

// Without a library like Underscore, this isn't that straightforward, since two arrays are never ===, even if they have the same elements (they are different objects in memory)
var arrayOne = [1,2,3];
var arrayTwo = [1,2,3];
console.log(arrayOne === arrayTwo);
// false

// Approach one - call the Array.toString method on the arrays, compare the strings returned by that method
arrayOne.toString();
// => "1,2,3"
arrayTwo.toString();
// => "1,2,3"

console.log(arrayOne.toString() === arrayTwo.toString());
// true

// Approach two - call the Array.join method on the arrays, compare the strings returned by that method
arrayOne.join("");
// => "123"
arrayTwo.join("");
// => "123"

// Sorting before comparing - unless you know the elements are going to be in a particular order, you'll probably want to srt them first

console.log(arrayOne.sort().join("") === arrayTwo.sort().join(""));
// => true

// Checking to see whether all elements in one array are present in another
var newArrayOne = [1,2,3];
var newArrayTwo = [2,1,3];

var matches = 0;
for (var i = 0; i < newArrayOne.length; i++) {
  if (newArrayTwo.includes(newArrayOne[i])) {
    matches += 1;
  }
  if (matches === newArrayOne.length) {
    console.log("All elements in newArrayOne were also present in newArrayTwo");
  }
}

// SORTING

var arrOfNums = [5,4,8,1,3];

var arrOfStrings = ["zebra", "acrobat", "kitten", "badger"];

console.log(arrOfStrings.sort());
// => ["acrobat", "badger", "kitten", "zebra"]

console.log(arrOfNums.sort());
// [1,3,4,5,8]

// Using events to populate arrays using appropriate indices

var buttonClicks = [];
$("button").on("click", function() {
  var position = $(this).attr("id");
  buttonClicks[position] = "clicked";
  console.table(buttonClicks);
});
