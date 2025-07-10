const http = require('http');
const url = require("url")

const { readFile } = require("./products/product.js")


http.createServer((req, res) => {
   const parcedURL = url.parse(req.url)
        // console.log(parcedURL);
    const pathName = parcedURL.pathname;
    const method = req.method;
    const path = pathName.split('/')
    console.log("Path",path)

    if (method === "GET" && pathName === "/products") {
        const data = readFile();
        // console.log(data)  
         res.writeHead(200, { 'Content-Type': 'application/json' });
        //  res.end(JSON.stringify(data));
        res.write(JSON.stringify(data));
        // res.write('hii hello')52
        return res.end(); 
    }


    res.write("iam server");
    res.end();

    
}).listen(3003, ()=>console.log("server running"))
