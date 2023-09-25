// reading and Writing File In Sync 

const {readFileSync ,writeFileSync} = require( 'fs');
const first  = readFileSync('./content/test.txt','utf8');
const second  = readFileSync('./content/test2.txt','utf8');



writeFileSync(
    './content/result-sync.txt', `here is result mode : ${first} , ${second}`,{flag:'a'}
)