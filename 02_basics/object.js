// create a object 
const mysym = Symbol("key1") // dont use new coz its for creating object 

const jsuser = {
    [mysym] : "key1", // use square brackest to use symbol inside the object 
    name : "pranaykumar",
    age : 25,
    email : "pranay@gmail.com"
     




}
console.log(jsuser[mysym]);

console.log(jsuser["name"]);

jsuser.email="pranay@mmail.com"

console.log(jsuser["email"]);

// Object.freeze(jsuser)

jsuser.email="pranay@mail.com"

jsuser.greetings = function(){

    console.log("welcome");
}
console.log(jsuser.greetings()); // gives the value of it 

console.log(jsuser.greetings); // gives the fuction itself 

jsuser.greetingsTwo = function(){
    console.log(`hello user ${this.name}`); // "this" its used to access the object "jsuser" values // and bacticks are used with dollar for better usage
}
console.log(jsuser.greetingsTwo());

