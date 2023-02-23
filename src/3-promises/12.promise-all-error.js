const coinFlip = (n) => new Promise((resolve, reject) => n > 0.5 ? resolve(true) : reject(false))

console.log('Begin')
const promiseArray = []
for (let i = 0; i < 4; i++) promiseArray[i] = coinFlip(Math.random())

// console.log(promiseArray)
// Reject all
Promise.all(promiseArray).then(console.log)
