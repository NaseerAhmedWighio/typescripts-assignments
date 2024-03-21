//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var Car = {
    name: "Lambourghini",
    model: 2020,
    price: 15000
};
var Mobile = {
    name: 'iPhone',
    model: "15Pro max",
    price: 980
};
console.log("Car Name: ".concat(Car.name, ", Price: $").concat(Car.price, ", Model: ").concat(Car.model));
console.log("Mobile Name: ".concat(Mobile.name, ", Price: $").concat(Mobile.price, ", Model: ").concat(Mobile.model));
