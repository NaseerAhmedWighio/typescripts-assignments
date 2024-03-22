//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("   - You ordered an empty sandwich. Please add some items.");
    }
    else {
        items.forEach(function (item, i) {
            console.log("   ".concat(i + 1, ". ").concat(item));
        });
    }
    console.log("\n");
}
// Call the function with different numbers of arguments
makeSandwich("Turkey", "Lettude", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
