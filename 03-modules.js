//Modules

const name = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
console.log(data)
console.log(name)

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)
