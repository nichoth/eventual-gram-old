var ssbClient = require('ssb-client')

ssbClient(function (err, sbot) {
    if (err) return console.log('err', err)
    console.log('sbot', sbot)
})
