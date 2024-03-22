//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users : string []= ["Naseer", "Waheed", "Manan", "Amir", "Moeen"]
// let new_users : string []= ["Tayyab", "Nazeer", "Sultan", "Zahir", "Hafeez"]
// let current_users_lower : string [] = current_users.map(user => user.toLowerCase())
// for (let new_user of new_users) {
//     if (current_users_lower.includes (new_user.toLowerCase())) {
//         console.log(`Sorry ${new_user}`)
//     }
// }
// step 1 arrays
var current_users = ["Kamran", "Ali", "Burhan", "Asad", "Asif", "Ahmed"];
var new_users = ["asif", "Kamran", "Phull", "Aisha", "ali"];
// step 2 fuction
function checkUsersNames(current_users, new_users) {
    // 1st step of function
    var lowercasedCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
    // 2nd step of function
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newUsers = new_users_1[_i];
        var lowercasedNewUser = newUsers.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log("Username \"".concat(newUsers, "\" is already taken.Please enter a new username."));
        }
        else {
            console.log("Username \"".concat(newUsers, "\" is available."));
        }
    }
}
// console.log(current_users)
// Test the function
checkUsersNames(current_users, new_users);
