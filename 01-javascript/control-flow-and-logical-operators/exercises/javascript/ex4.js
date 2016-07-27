// The Pluralizer
//
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

var noun = "dog";
var num = 3;

if (noun.endsWith("y") && (num !== 1)) {
     var str = noun.slice(0,-1);
     console.log(num + " " + str + "ies");
} else {
     if (num !== 1) {
         console.log(num + " " + noun + "s");
     } else {
         console.log(num + " " + noun);
     }
}
