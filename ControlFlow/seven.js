const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// //const newNumber = myNumbers.map( (num) => {return num +10})

// console.log(newNumber);

// --------------------------------------------chaning-----------------------------------------
const newNums = myNumbers
                        .map( (nums) => nums *10)
                        .map( (num) => num +1)
                        .filter( (num)=> num >= 40)




console.log(newNums);



