const accountId = 144553
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "jhandadmi@c.com"
accountPassword = "264547838"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);