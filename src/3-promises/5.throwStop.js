function start() {
  throw new Error('An error')
}

console.log('Begin')
start()
console.log('End')

// O console `End` não é impresso por causa do erro lançado.