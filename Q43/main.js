//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Array of magician's names
var magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weassley"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
var greatMagicianNames = make_great(magicianNames);
// Call the function to show the orginal magician's names
console.log("Original Magicians:");
show_magicians(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
