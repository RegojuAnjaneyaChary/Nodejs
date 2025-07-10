const http = require('http');
const myServer = http.createServer((request, response) => {

    response.write("Welcome to Server")
    response.end()
})
myServer.listen(3000, () => {
    console.log("Server is running at http://localhost:5500");
});