// const temprature = 41 
// if (temprature < 50 ){
//     console.log("temprature is low");
// }
// else {
//     console.log("temprature is high");
// };
const val1 = 21
if (val1 < 50){
    console.log("temps is low");
    // const userCanDo = "fly"
    // console.log(`user can fly ${userCanDo}`); 
    // the scope of a function can be accessed inside only inside it 
    //its scope and cant be accessed outside of it because the parent cant access the child variables only arent can access its parent values
}
// console.log(`user can fly ${userCanDo}`);



const userLoggedIn = true
const userProvidedName = true 
// && is used to check  both condition should be true
if (userLoggedIn && userProvidedName){
    console.log("allow user ");

}

const userLoggedInUsingGoogle = true
const userLoggedInUsingEmail = false
// "||" is used as or condition if tis or that 
if (userLoggedInUsingEmail || userLoggedInUsingGoogle){
    console.log("user allowed to login");
}
//  {} scope 
// code inside the scope can be used only inside it only if it comes out it cant br used but child scope can use global scope and access it
