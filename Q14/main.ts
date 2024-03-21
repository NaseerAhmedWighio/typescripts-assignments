// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guest_list : string [] = ["Waheed", "Naseer", "Manan", "Asghar"];
for(let i=0; i<guest_list.length; i++){
    console.log('\nRespected Sir\n' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
}
export{guest_list}