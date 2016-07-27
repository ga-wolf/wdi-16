// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var getGrade = function(num) {
    var grade;
    if (num >= 90) {
        grade = "A";
    } else if (num >= 80) {
        grade = "B";
    } else if (num >= 70) {
        grade = "C";
    } else if (num >= 60) {
        grade = "D";
    } else {
        grade = "punch in the neck";
    }
    // return grade;
};

var giveGrade = function() {
    for (var i = 100; i >= 59; i--) {
        var result = getGrade(i);
        console.log("For " + i + " you got a " + result);
    }
};

giveGrade();
