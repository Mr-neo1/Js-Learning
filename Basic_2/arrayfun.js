const user = {
    username: "Rohit",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);

        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Priyanka"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rohit"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Rohit"
//     console.log(this.username);
// }

// chai()

// const chai = ()=> {
//     let username = "Rohit"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Rohit"
    console.log(this);
}




//chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//  ------------------------------------------------------------implicit return--------------------------------------------------------- 
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

// -----------------------Defination--------------------------
//If we use {} we have to write 'retun'. and if we use () no need to write 'retun'

// const addTwo = (num1, num2) => {username: "Rohit"}    ------- We cant return object like this we have to use ()
const addTwo = (num1, num2) => ({username: "Rohit"})


console.log(addTwo(5, 9));

// const myArray =  [1,2,3,5,4,6]

// myArray.forEach(() => {})  -------  example  loop function ----------------------------- 