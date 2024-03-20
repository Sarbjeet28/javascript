let myobject = {
    name: "Sarbjeet",
    "full name": "Sarbjeet kaur",
    email: "sarb@gmail.com",
    Location: "Raikot",
    state: "Punjab",
    pincode: 141109,
    isloggedin: false
}

// to print all object values
console.log(myobject);

// first method to print specific value
console.log(myobject.name);

// second method to print specific value
console.log(myobject["name"]);

// if key have string type representation,then second method is only applicable 
console.log(myobject["full name"]);

// redeclare the value of email
myobject.email = "sarbjeet.sembhi@gmail.com";
console.log(myobject.email);

// object freeze, after this object values not changed
// Object.freeze(myobject);
myobject.email = "sarb@gmail.com";
console.log(myobject);

// object key greeting declare as function
myobject.greeting = function(){
    console.log("Hello world");
}

// to print the above the function
console.log(myobject.greeting());

// object key greeting2 declare as function and use this keyword to fetch myobject values
myobject.greeting2 = function(){
    console.log(`Hello world ${this.name}`);
}

// to print the above function
console.log(myobject.greeting2());
