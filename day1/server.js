const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>hello world!!</h1>");

});
server.listen(port, hostname, () => {
    console.log(`Server is running on localhost:${port}`);
});