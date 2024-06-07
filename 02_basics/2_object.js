// const user1  = new Object() // its a singleton object

// here we are using multiple iteration inside a object and this is a non-singleton object 
const user1 = {
    username:{
        userId:{
            userName:{
                fullname:"pranay kumar",
                nickname:"PK"
            }
        }
    }
}
console.log(user1.username.userId.userName.fullname);

// concat two objects 
const name1 ={1:"a", 2:"b"}
const nam2 = {3:"name"}


// The source object from which to copy properties.
//Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// Returns the target object.



const ob3 = Object.assign({}, name1 , nam2) // "{}" its like a target so that all the concated values go inside the parantices 
console.log(ob3); 
// or we use spread operation 
const object3 = {...name1, ...nam2}
console.log("two ways to do the concatination of objects ");
console.log(object3);
// here we have declared the object and we are assgining the data using tinder.data so that it can get inside the object 
const tinder = {}
tinder.name ="prnay"
tinder.id = 32
tinder.email = "pranay@gmail.com"

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// used to chec does the property exits in it or not 
console.log(tinder.hasOwnProperty("id"));



const user =[
    {
        id:"123abc",
        name:"pranay",
        age :"21"

    },
    // {
    //     id:"438mr",
    //     name:"manja",
    //     age :"25"

    // },
    // {
    //     id:"106jfh",
    //     name:"manu",
    //     age :"32"

    // }
]
//  deconstructor 
const course = {
    coursename:"learn",
    courseprize:299,
    coursetime:"2pm"
}
const {coursename: namea} = course
console.log(namea);










