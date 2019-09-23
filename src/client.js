var ssbClient = require('ssb-client')

function start (cb) {
    ssbClient(function (err, sbot) {
        if (err) return console.log('err', err)
        // console.log('sbot', sbot)
        cb(err, sbot)
    })
}

if (require.main === module) {
    start()
}

module.exports = start
