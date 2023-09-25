const os = require('os');

console.log(os.userInfo());


const currentOS = {
    names : os.type(),
    release : os.release(),
    totalMem : os.totalmem()
}

console.log(currentOS);
