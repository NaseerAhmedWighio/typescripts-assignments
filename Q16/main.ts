//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.


let guest_list : string [] = ["Waheed", "Naseer", "Manan", "Asghar"];
// for(let i=0; i<guest_list.length; i++){
//     console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
// }
let not_present : string = 'Asghar';
let new_guest : string = 'Usama';
guest_list[3] = new_guest;
guest_list.unshift('Nazeer');
guest_list.splice(3,0, "Tayyab");
guest_list.push("Sultan");
for(let i=0; i<guest_list.length; i++){
    console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe found a big table so we are inviting three more persons\nAnd\nWe invited you to dinner together.\nThank You\n');
}
console.log(`Mr. ${not_present} will not coming tommorow dinner.`);