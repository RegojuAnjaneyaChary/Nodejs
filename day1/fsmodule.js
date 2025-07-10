// const fs = require('fs')
// fs.readFile('index.txt', 'utf8', (err, data) => {
//    //utf8 encoder data convert to buffer to stringfy
//     if (err) {
//       console.log(err)
//     }
//     console.log(data)


// })

// //file create
// fs.writeFile('fsexample.html', 'utf8', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('file created successfully')
// })



//content write
const fs = require('fs')
const contentsample = 'my name chary, iam creating dynamic content '
fs.writeFile('fsexample.html', contentsample, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('file content is success')
    }


})
  
//rename file name
// const fs = require('fs')

// fs.rename('fsexample.html', 'newexample.js', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file name modified is success')
//     }


// })


// deletion method
// const fs = require('fs')
// fs.unlink('newexample.js', (err) => {
//      if (err) {
//         console.log(err)
//     } else {
//         console.log('file deleted success')
//     }
    
// })