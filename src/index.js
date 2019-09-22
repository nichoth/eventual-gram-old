var ssbClient = require('ssb-client')
console.log('hello')

ssbClient(function (err, sbot) {
    if (err) return console.log('err', err)
    console.log('sbot', sbot)
})
