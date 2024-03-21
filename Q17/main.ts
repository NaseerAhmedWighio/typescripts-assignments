//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guest_list : string [] = ["Waheed", "Naseer", "Manan", "Asghar"];
// for(let i=0; i<guest_list.length; i++){
//     console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
// }
let not_present : string = 'Asghar';
let new_guest : string = 'Usama';
guest_list[3] = new_guest;
guest_list.unshift('Nazeer');
guest_list.splice(3,0, "Tayyab");
guest_list.push('Sultan');
// for(let i=0; i<guest_list.length; i++){
//     console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe found a big table so we are inviting three more persons\nAnd\nWe invited you to dinner together\nAnd\nWe invited you to dinner together.\nThank You\n');
// }
// console.log(`Mr. ${not_present} will not coming tommorow dinner.`);
console.log(`\nunfortunately we can't arrange big table, only two people allow`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir.${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir, ' + guest_list[i] + ',\nYes you are still invited on tommorow dinner.\nThank You \n')
}

//And now list is empty
guest_list.splice(0,2)
    console.log(guest_list)
    