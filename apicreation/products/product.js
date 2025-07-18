const fs = require('fs');

const path = require('path');

const filepath = path.join(__dirname, 'data.json');

console.log(filepath);

const readFile = () => {
    const a = fs.readFileSync(filepath, "utf-8");
    // console.log(a);
    console.log(JSON.parse(a));
    return JSON.parse(a)

}
// 9/7/2025 write file
const writefile = (data) => {
    fs.writeFileSync(filepath, JSON.stringify(data))
}




console.log(readFile());
module.exports = { readFile, writefile };