const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function readFileAsync(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) return reject(err)
      return resolve(data)
    })
  })
}

console.log('Begin');
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf8' })
  .then(console.log)
  .catch(console.error)
console.log('End');