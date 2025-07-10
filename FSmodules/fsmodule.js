const fs = require('fs')
// console.log("file reading started")
// fs.readFile('./fsmodule.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log("file not found")
//     }
//     console.log(data);
// })
// console.log("file reading ended")

fs.writeFile('./fsmodule.txt', 'wertyuio', (error, data) => {
    if (error) {
        console.log("file not found")
    }
    else {
        console.log("writen data on file");
    }
})
