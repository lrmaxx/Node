const check = require('lodash');

const items = [1 ,[2 , [12  ,[13 ] ] ] ];
const newmap = check.flatMapDepth(items);

console.log(newmap);

