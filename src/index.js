const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function cb(err, data, index, max) {
  if (err) throw err;
  console.log(data);
  return startRecursive(index + 1, max);
}

console.log('Begin');

console.log('End');

/*
sync full file
sync sentence

callback single params
callback single function
callback unordered
callback hell
callback hell 2
callback recursive

promise
promisify
*/