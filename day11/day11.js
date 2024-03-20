// first method to declare objects
// let userobj = {
//     name: "sarbjeet",
//     age: "21",
//     place: "raikot"
// }

// second method to declare object (singleton method)
let userobj1= new Object()
// console.log(userobj1);     output: {}

userobj1.name= "sarb";
userobj1.email="sarb@gmail.com";
userobj1.place= "raikot";
// console.log(userobj1);

// nesting of objects
let userobj2 = {
    username: {
        fullname: {
            firstname: "sarbjeet",
            lastname: "kaur"
        }
    }, 
    age: "21",
    place: "raikot"
}
// console.log(userobj2.username.fullname.firstname);

// merge objects
// first method ,that is not effective
// let obj1= {1: "a", 2: "b"}
// let obj2= {3: "c", 2: "d"}
// let obj3= {obj1, obj2}
// console.log(obj3);

// second method to merge objects; in this obj1 contains the values of obj2 also, that is why its not effective 
// let obj1= {1: "a", 2: "b"}
// let obj2= {3: "c", 4: "d"}
// let obj3= Object.assign(obj1, obj2)
// console.log(obj3);
// console.log(obj1);

// third method to merge objects; in this {} contains the values of obj1 and obj2 and so on. Its effective way
// let obj1= {1: "a", 2: "b"}
// let obj2= {3: "c", 4: "d"}
// let obj3= Object.assign({}, obj1, obj2)
// console.log(obj3);
// console.log(obj1);

// fourth method to merge objects is using spread operator
let obj1= {1: "a", 2: "b"}
let obj2= {3: "c", 4: "d"}
let obj3= {...obj1,...obj2}
// console.log(obj3);

// object destructing, using this we dont need to write userobj.name or userobj.age. This concept is used in react js when we use props
let userobj = {
    name: "sarbjeet",
    age: "21",
    place: "raikot"
}
let {name, age} = userobj
console.table([name, age]);

// JSON data format,
// {
//     "name": "sarbjeet",
//     "age": "21"
// }

// JSON with array
// [
//     {},
//     {},
//     {}
// ]


