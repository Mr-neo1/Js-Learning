const fs = require('fs');
//readFile

fs.readFileSync('abc.txt', (error, data) =>{
if (error){
    console.log("error");
    console.log(error);
}else{
    console.log(data.toString());
}
});

console.log("terminatted");



//writeFile
let content = "wow this is dynamic content"
fs.writeFile("new_file.txt", content,(err) => {
    if (err){
        console.log(err);
    } else{
        console.log("saved");
    }
});
//appendFile
//deleteFile

