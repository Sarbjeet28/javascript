// Global and local scope
{
    let a = 20
    const b = 20
    var c = 20
}
// console.log(a);     //error a is not defined, bcz a is declared with in the scope(local scope)
// console.log(b);     //erroe same as a
// console.log(c);     // output: 20, var has no restrictions wouthin scope that is why we are not used var keyword

// example 
let a = 200;
if(true){
    let a = 20
    console.log("Inner a: ",a);
}
console.log(a);    

// scope in nested functions
function one(){
    const username = "abc";
    function two(){
        const social = "YouTube";
        console.log(username)     //output abc, two () is local function or child of one() so local access global data
    }
    // console.log(social);      //error social is not defined , out of scope
    two();
}
// console.log(username);     // error username is not defined
one();

// scope in nested if 
if(true){
    const name  = "sarbjeet";
    if (true) {
        const lname  = "kaur";
        console.log(lname);      //o/p- kaur
    }
    // console.log(lname);       // error lname is not defined
}

// example- scope with nested if
let userlogin=true;
if(username="sarb"){
    const email = "sarb@gmail.com";
    if (userlogin) {
        const a = "hello world";
        console.log("user email is:", email);
    }
    // console.log(a);     //error 
}

// first method to declare function
function fmethod(num1){
    return num1+1
}
console.log(fmethod(2));

// second method variable holds function
let smethod = function secondm(num2){
    return num2 + 4
}
console.log(smethod(4));

// difference in both methods- when we call first method above defination, it will give right output. On the otherhand when we call second method above defination, it will give error we cant access before initialization.