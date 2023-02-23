const fs = require('fs');
const path = require('path');
const basePath = './assets/';
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

console.log('Begin');
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf8' })
  .then(console.log)
  .catch(console.error)
console.log('End');