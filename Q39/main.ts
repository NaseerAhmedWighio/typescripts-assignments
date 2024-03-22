//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.


// arrow function

const city_country = (city: string, country: string): string =>
{ 
   return `${city}, ${country}`;
}



// Test the function with three city-country paris

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));