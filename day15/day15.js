// this keyword- it is used to fetch current values
const obj2 ={
    name:"sarbjeet",
    price:999,
    welcomemessage: function ecom(){
        console.log(`${this.name},Welcome to Js`);
    }
}
obj2.welcomemessage()
obj2.name = "sarbjeet kaur";
obj2.welcomemessage()



