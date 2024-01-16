// const myObject = {
//     js:'JavaScript',
//     cpp: "C++",
//     py: "Python",
//     rb : "Ruby"

// }

// for (const key in myObject) {
//     console.log(`${key} Extension is ${myObject[key]}`);
// }



// -----------------------------------------------ittrate Array

// const myArray = ["hello", "world","Priyanka"]

// for (const key in myArray) {
//     console.log(myArray[key]);
// }

const map = new Map()
map.set('In', "India")
map.set('Uk', "United Kingdom")
map.set('Ne', "Nepal")
map.set('SL', "Sri Lanka")

for (const key in map) {
    console.log(key);
}