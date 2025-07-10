const http = require('http');
const url = require("url")

const { readFile, writefile } = require("./products/product.js")
const { v4 } = require("uuid");
const { writeFile } = require('fs');

http.createServer((req, res) => {
    const parcedURL = url.parse(req.url)
    // console.log(parcedURL);
    const pathName = parcedURL.pathname;
    const method = req.method;
    const path = pathName.split('/')
    console.log("Path", path)


    if (method === "GET" && pathName === "/products") {
        const data = readFile();
        // console.log(data)  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        // res.write('hii hello')
        return res.end();
    }
    // get all productsbuid
    else if (method === "GET" && pathName === `/products/${id}`) {
        const data = readFile();
        const product = data.find((item) => item.id = id);
        if (product) {
            res.writeHead(200);
            res.write(JSON.stringify(product));
            return res.end();
        } else {
            res.writeHead(404);
            res.write("product not found");
            return res.end();
        }

    }

    // 9/7/2025 add products api
    else if (method === "POST" && pathName === "./addProducts") {
        let body = "";
        req.on("data", (d) => {
            body += d;

        });
        req.on("end", () => {
            const data = readFile();
            const inputData = JSON.parse(body);
            inputData.id = v4();
            console.log(inputData)
            data.push(inputData);
            console.log(data);
            writefile(data);
            const message = {
                message: "product added successfully",
                product: inputData,

            };
            res.writeHead(201);
            res.write(JSON.stringify(message));
            res.end();

        });
        //res.write("add products")
        return;
    }

    // update productby id api

    else if (method == "PUT" && pathName == `/updateProduct/${id}`) {

        const data = readFile();
        const checkProduct = data.find((item) => Item.id == id);
        if (checkProduct) {
            console.log("exist");
            let body = "";
            req.on("data", (c) => {
                body += c;
            });
            req.on("end", () => {
                body = JSON.parse(body);
                for (value of data) {
                    if (value.id == id) {
                        console.log("body.....", body);
                        value.id = id;
                        value.name = body.name;
                        value.category = body.category;
                        value.price = body.price;

                    }
                }
                writeFile(data);
                res.writeHead(200);
                res.write("updated successfully");
                res.end();

            });


        } else {
            res.writeHead(404);
            res.write("product not found");
            res.end();
        }

        return;

    }
    // delte by id api
    else if (method == "DELETE" && pathName == `/deleteProduct/${id}`) {
        const data = readFile();
        const check = data.some((item) => item.id == id);
        console.log("check id ... ", check)
        if (check) {
            const newData = data.filter((item) => item.id != id);
            writeFile(newData);
            res.writeHead(204);
            res.write("deleted successfully");
            res.end();

        } else {
            res.writeHead(404);
            res.write("product not found");
            res.end();
        }
        return;

    }


    res.write("iam server");
    res.end();


}).listen(3003, () => console.log("server running"))
