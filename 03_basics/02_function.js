// here im passing my object values inside the function 
arraysAre =  [200,400,500]
 
function getSecondArray(TakeArray){
    return TakeArray[2]
}
console.log(getSecondArray(arraysAre));

const userName = {
    username : "pranay",
    IdOfUser : 24


}
// to access the object using function 
function GetAcessOfUserDetails (getUser){
    
    console.log(`username is ${getUser.username} and id is ${getUser.IdOfUser}`);
    // here have to get the parameter.something  to define it and to access it 
}
 GetAcessOfUserDetails(userName)
// we can define a object inside the function in below example 
// GetAcessOfUserDetails({
//     userName:"pranay",
//     IdOfUser:24
// })