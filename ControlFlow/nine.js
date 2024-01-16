// ------------------------------reduce----------------------------------------------

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc : ${acc} and currval :${currval}`)
//     return acc + currval
// }, 0)

//console.log(myTotal);

// ------------------------------------with arroe function --------------------------------------
// const myTotal = myNums.reduce( (acc, curr) => (acc + curr),0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "DSA course",
        price: 2999
    },
    {
        itemName: "android course",
        price: 3999
    }
]

const pricetoPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)

console.log(pricetoPay);