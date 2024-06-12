const user = {
    userName:"pranay",
    userId: 24,
    userLogIn: function() {
         
        console.log(`${this.userName}, has logged in `);
        console.log(this);
    }
}
user.userName="pk"
user.userLogIn()

function chai () {
    user:"pk"
    console.log(this.user)

}

chai() // when we use this inside the function it gives the output of undefined 
// in arrow function we have to use the let or const inside it and we use () instead function
const username = ()=> {
    let userIs = "pk"
    console.log(this.userIs);

}
username(); //semicolon is importent to end and run other codes
// IIFE
(  (name) => { //unnamed IIFE 
    console.log(`hello ${name}`);
} )('pk');


(function chai(){ //named IIFE
    console.log(`hello world`);
    


})()
 