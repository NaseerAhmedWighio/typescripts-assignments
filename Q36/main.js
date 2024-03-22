//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
var make_shirt = function (size, message) {
    console.log("size: ".concat(size, ", Message: '").concat(message, "'"));
};
// Call the function
// call the function with the size and the message variables.  
var size = "medium";
var message = "TypeScript Insights with Kamran";
make_shirt(size, message);
// directly call the function
make_shirt("Large", "TypeScript Insights");
