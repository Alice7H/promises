const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 5000)
})

console.log('Begin');

promise.then((text) => console.log(text))
// promise.then((text) => console.log(text)).catch((err) => console.log('oops', err));
// or
promise.then(console.log)
// or
promise.then(
  (res) => setTimeout(() => res('End'), 5000),
  (rej) => console.error(rej)
)
