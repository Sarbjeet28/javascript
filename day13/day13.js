// functions part 2

// function isloggedin(username){
//     return `${username} is logged in`

// }
// console.log(isloggedin("sarbjeet"));
// console.log(isloggedin(""));   output: is logged in
// console.log(isloggedin( ));   output: undefined is logged in

// if username is undefined then using if statement working of undefined
function isloggedin(username){
    if(username===undefined){
        console.log("enter your name");
        return 
    }
    return `${username} is logged in`   
}
// console.log(isloggedin( ));

// using rest operator print multiple values in array form
// function calCartFunc(...num1){
//     return num1
// } 
// console.log(calCartFunc(2,4,6,8,10,12)); 

// Arguments and rest operator, in this val1 holds 200 and val2 holds 400
function calCartFunc(val1, val2, ...num1){
    return num1
} 
// console.log(calCartFunc(200, 400, 600,800)); 

// functions with object
let myobj = {
    name: "sarbjeet",
    age: 21,
    place: "raikot"
}
function myobjdetails(anyobj){
    console.log(`name is ${anyobj.name} and place is ${anyobj.place}`); 
}
// call function and pass object  
myobjdetails(myobj)
    
// functions with array
let myNewArray = [200,400,600,800];
function abc(getAnyArray){
    console.log("value of array index is", getAnyArray[1]);
}
// call function and pass array name
abc(myNewArray)
