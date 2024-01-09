//singeton
//object.create

//object literals (Literals cannot make singleton objects)

const mySym = Symbol("key1");
const JsUser = {
    name : "Rohit",
    age : 10,
    [mySym] : "key1",
    location : "Bihar",
    email : "rkrai3122@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser);
// JsUser.email = "alpha@gmail.com"
// console.log(JsUser);

JsUser.hello = function(){
    console.log("hello world")
}

console.log(JsUser.hello())

JsUser.heelo1 = function(){
console.log(`Im Rohit kumar, ${this.name}`)
}

console.log(JsUser.heelo1())
