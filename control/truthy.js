// truthy value 
//  "0", "false", "", function(){}, {}

// falsy values 
// 0, false, -0, BigInt 0n,null, undefined 


// object
const object1 = {}
if (Object.keys(object1).length == 0) {
    console.log("empty");
    
}
// array
 const array1 = []
 if (array1.length ==0) {
    console.log("will be empty");
 }

// nllish coalsing operator (??)
// valu1 = null ?? 10
// valu1 = undefined ?? 10
// valu1 = 5 ?? 10



// console.log(valu1);


// terniary operator (?)

const value1 = 25
value1 > 25? console.log("great then 25 "): console.log("equal to 25");