// 1. What is the purpose of a variable in JavaScript, and how do you declare one?
// Ans: variables are used to store data (just like containers)
const id = 201;
let name = "Sarbjeet";
var age = 22;

// 2. Explain the difference between let, const, and var when declaring variables.
// Ans: const keyword is used to declare variables and we can not reasign new value to a variable  after execution
//  var and let keyword are used to declare variables, in let keyword we cant redeclare variable , we can reassign a new value in the variable. on the other hand var keyword redeclare and reassign the value in varible so it is not preferable when multiple developers working on same project.
var age = 21;
name = "sarb";

// 3. How do you check the data type of a variable in JavaScript?
// Ans: we can check datatype using typeof keyword
// console.log(typeof name);
// console.log(typeof id);

// 4. Create a variable and store a string in it. Then, create another variable and store a number. How would you check if one variable is of the same data type as the other?
let a = "hello world";
let b = 11;
console.log(typeof a == typeof b);

// 5. How do you create an empty array in JavaScript?
let myarr = [];
// console.log(myarr);

// 6. Write code to add an element to the end of an array and to the beginning of an array.
// Ans: add element at the end using push method and at the beginning using unshift method
let array = [1,2,3,4,5,6];
// array.push(7)
// console.log(array);
// array.unshift(0)
// console.log(array);

// 7. How do you access elements within an array? Explain how array indexing works.
// Ans: array indexing start from 0, using slice and splice method we access array elements
// console.log(array[2]);
// console.log(array.slice(1,4));
// console.log(array.splice(1,4));

// 8. What is the difference between push and pop methods when working with arrays?
// Ans: push method is used to add element at the end of array and pop method is used to remove element at the end of array
let arr= [1,2,3,4,5];
// arr.push(9);
// console.log(arr);
// arr.pop();
// console.log(arr);

//9. What is an object in JavaScript, and how is it different from an array? 
// object is a datatype in js and store data in key: value pair and array is a datatype used to store ordered collection of elements
let myobj = {
    name : "sarbjeet",
    age : 22
}
// console.log(myobj);

// 10. Create an object representing a person with properties like name, age, and city. How would you access these properties?
let person = {
    name: "Sarbjeet",
    age: 22,
    city: "raikot"
}
// console.log(person.name);
// console.log(person["age"]);

// 11. How can you add, update, and delete properties in an object?
let person1 = {
    name: "Sarbjeet",
    age: 22,
    city: "raikot"
}
// person1.email ="sarb@gmail.com";
// console.log(person1);
// person1.age = 21;
// console.log(person1);
// delete person1.age;
// console.log(person1);

// 12. How do you create a Date object in JavaScript, and how can you obtain the current date and time?
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());








