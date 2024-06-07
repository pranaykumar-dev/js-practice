function EnterNumbers (number1, number2){
    return number1 + number2 
}
console.log(EnterNumbers(2,4));

function userLoggedIn (username ){
    // here if is used to check whether the input is given or not and "===" used to compare is undefined or full
    // username === undefined or !username = both are similar to each other 
    if (!username){
        console.log("enter user name");
        return
    }
    return `${username} just logged in ` 

}
const userIs = userLoggedIn( )
console.log(userIs);