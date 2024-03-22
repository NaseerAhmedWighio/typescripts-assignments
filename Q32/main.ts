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
const current_users: string[] = ["Kamran", "Ali", "Burhan", "Asad", "Asif", "Ahmed"];

const new_users: string[] = ["asif", "Kamran", "Phull", "Aisha", "ali"];
 
// step 2 fuction

function checkUsersNames(current_users: string[], new_users: string[]): void
{
    // 1st step of function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
// 2nd step of function
    for (const newUsers of new_users) {
        const lowercasedNewUser = newUsers.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUsers}" is already taken.Please enter a new username.`);
        } else {
            console.log(`Username "${newUsers}" is available.`);
        }
    }
}

// console.log(current_users)

// Test the function


checkUsersNames(current_users, new_users);