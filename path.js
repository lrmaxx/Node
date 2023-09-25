const path = require('path')

console.log(path.sep)

// for File Path

const  filepath  = path.join('/content/','test.txt');

console.log(filepath);

// for access last base of File Path
const base = path.basename(filepath);

console.log(base)

const absolute = path.resolve(__dirname,'content','test.txt');

console.log(absolute);