const ret = require('ret')
const args = process.argv.slice(2).join(' ')

console.log(JSON.stringify(ret(args), null, 2))
