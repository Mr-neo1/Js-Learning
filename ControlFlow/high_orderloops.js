// for of

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    if (greet == " ") {

        continue;
        
    }
    //console.log(`each chae is ${greet}`);
}

 
// -------Maps -------------

//Only unique values

const map = new Map()
map.set('In', "India")
map.set('Uk', "United Kingdom")
map.set('Ne', "Nepal")
map.set('SL', "Sri Lanka")


//console.log(map);


for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// this method only workd on Map it will not work on Objects to itterate
const myObject = {
    game1 : 'NFS',
    game2 : "BSF"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}

