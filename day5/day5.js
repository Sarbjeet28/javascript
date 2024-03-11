//stack memory allocation
let name1= "sarbjeet";
let name2= name1
name2= "jagdeep";

console.log(name1);
console.log(name2);

//Heap memory allocation
let userone = {
    email: "sarb@gmail.com",
    upi: "abc@ybl"
}

let usertwo= userone;
usertwo.email="abc@gmail.com";

console.log(userone.email);
console.log(usertwo.email);
