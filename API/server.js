const http = require("http");
// const url= require("url");

http.createServer((req, res) => {
    // console.log("url:", req.url, "method:", req.method);
    // console.log("url object", url.parse(req.url))
    // const parseUrl = url.parse(req.url);
    // console.log(parseUrl);
    // if (req.method === "GET" && parseUrl.pathname === "/users") {
    //      res.write("userinfo");
    // res.end();
    
    // }
    //  res.write("hi");
    // res.end();
    if(req.url === "/products" && req.method ==="GET"){
        res.writeHead(200);
        res.write("product data");
        res.end();

    } else {
        res.writeHead(404, {"content-type" : "application/json"});
        read.write("not found");
        res.end()
        
    }


   
}).listen(3002, () => {
    console.log("server running on port 3002")
});