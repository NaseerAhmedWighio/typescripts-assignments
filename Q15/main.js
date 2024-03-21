//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest_list = ["Waheed", "Naseer", "Manan", "Asghar"];
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
}
var not_present = 'Asghar';
var new_guest = 'Usama';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tommorow dinner."));
