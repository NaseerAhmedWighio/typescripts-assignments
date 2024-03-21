//How to use array in TypeScript

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let names : string [] = ["Waheed", "Naseer", "Manan", "Usama", "Asghar"];
let message = "How are you, ";
for(let i=0; i<names.length; i++){
    console.log(message + names[i]);
}