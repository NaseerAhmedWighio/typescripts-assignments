//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
var blue = "20%";
var red = "10%";
var orange = "20%";
// if /else condition
//Test 1
console.log("blue == orange?");
if (blue == orange) {
    console.log("colours are equal");
}
else {
    console.log("colours are not equal");
}
//Test 2
console.log("red == orange?");
if (red == orange) {
    console.log("colours are equal");
}
else {
    console.log("colours are not equal");
}
// test in equality
var Age1 = 20;
var Age2 = 15;
//Test 3
console.log("Age1: 20 = 20?");
if (Age1 == 20) {
    console.log("you are eligible for apply");
}
else {
    console.log("you are not eligible for apply");
}
//Test 4
console.log("Age2: 15 == 20?");
if (Age2 == 20) {
    console.log("you are eligible for apply");
}
else {
    console.log("you are not eligible for apply");
}
//Test 5
console.log("Age1: 20 != 20?");
if (Age1 != 20) {
    console.log("you are eligible for apply");
}
else {
    console.log("you are not eligible for apply");
}
//Test 6
console.log("Age2: 15 != 20?");
if (Age2 != 20) {
    console.log("you are eligible for apply");
}
else {
    console.log("you are not eligible for apply");
}
// in upper and lower condition
//Test 7
console.log("Age2: 15 <= Age1: 20?");
if (Age2 <= Age1) {
    console.log("younger");
}
//Test 8
console.log("Age1: 20 >= Age2: 15?");
if (Age1 >= Age2) {
    console.log("Older");
}
// and and condition
var Education = "matric";
var Education2 = "middle";
var Age = 18;
var Age3 = 15;
//Test 9
console.log("Education == matric && Age == 18?");
if (Education == "matric" && Age == 18) {
    console.log("you are eligible for job");
}
else {
    console.log("you are not eligible for job");
}
//Test 10
console.log("Education == Matric && Age3:15 = 18?");
if (Education == "matric" && Age3 == 18) {
    console.log("you are eligible for job");
}
else {
    console.log("you are not eligible for job");
}
// OR condition
//Test 11
console.log("Education : matric == || Age3:15 == 18?");
if (Education == "matric" || Age3 == 18) {
    console.log("you are eligible for job");
}
else {
    console.log("you are not eligible for job");
}
//Test 12
console.log("Education2 : middle == matric || Age3:15 == 18?");
if (Education2 == "matric" || Age3 == 18) {
    console.log("you are eligible for job");
}
else {
    console.log("you are not eligible for job");
}
// test items in Arry
var Country = ["Pakistan", "China", "Afghanistan", "Iran"];
// Test 13
console.log("If Pakistan in list?");
if (Country.includes("Pakistan")) {
    console.log("pakistan available in list");
}
else {
    console.log("pakistan is not available in list");
}
//Test 14
console.log("If India in list?");
if (Country.includes("India")) {
    console.log("India is available in list");
}
else {
    console.log("India is not available in list ");
}
