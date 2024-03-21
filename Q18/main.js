//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// step 1: Create an array to store Tralve destinations.
var places = [" Mohatta Palace", " Frere Hall", " Faisal Masjid", " Pakistan Meusem", " Minar e Pakistan"];
// step 2: Print your array in its original order
console.log("Original Order:");
console.log(places);
// step 3:Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log(__spreadArray([], places, true).sort());
// Step 4:Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(places);
// step 5:  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list");
console.log(__spreadArray([], places, true).sort().reverse());
// step 6:Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(places);
// Step 7:Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
places.reverse();
console.log(places);
// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original");
places.reverse();
console.log(places);
// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabatical order");
places.sort();
console.log(places);
// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabatical order");
places.sort().reverse();
console.log(places);
