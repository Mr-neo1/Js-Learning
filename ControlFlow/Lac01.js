// // If statement 
// const isUserLoggedIn = true

// if(4 === "4"){
//     console.log("hello world");
// }
// else{
//     console.log("Good bye");
// }

// const balance = 10000
// // if (balance < 500) console.log("test") , console.log("Test2")

// if (balance > 800){
//     console.log("less thn");
    
// }
// else if (balance < 6000){
//     console.log("Less then 6000");
// }


const isUserLoggedIn = true
const debitCard = true
loggedInFromEmail = true
loggedInFromGooge = false

if (isUserLoggedIn && debitCard){
    console.log(`allow to buy course`);
}

if (loggedInFromEmail || loggedInFromGooge){
    console.log("Login is sucessful");
}
