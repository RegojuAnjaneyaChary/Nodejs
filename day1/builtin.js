// os module

// const os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())

// //know the file path
// console.log(__dirname)
// console.log(__filename)


// path module
const os = require('os')
const path = require('path')

console.log(path.dirname(__filename)) //which folder we are in 
console.log(path.basename(__filename))// file name showing
console.log(path.extname(__filename)) // extension name showing
console.log(path.parse(__filename))