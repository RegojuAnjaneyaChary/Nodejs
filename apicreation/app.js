const http = require('http');
const url = require("url")

const { readFile } = require("./products/product.js")


http.createServer((req, res) => {
    const parcedURL = url.parse(req.url)
    // console.log(parcedURL);
    const pathName = parcedURL.pathname;
    const method = req.method;
    const path = pathName.split('/')
    console.log("Path", path)
     const id = path[2]

    if (method === "GET" && pathName === "/products") {
        const data = readFile();
        // console.log(data)  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        // res.write('hii hello')
        return res.end();
    }
    // get all productsbyid
    else if (method === "GET" && pathName === `/products/${id}`) {
        const data = readFile();
        const product = data.find((item) => item.id == id);
        if (product) {
            res.writeHead(200);
            res.write(JSON.stringify(product));
            return res.end();
        } else {
            res.writeHead(404);
            res.write("product not found");
            return res.end();
        }
       return
    }


    res.write("iam server");
    res.end();


}).listen(3003, () => console.log("server running"))
