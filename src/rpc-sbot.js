var ssbClient = require('ssb-client')
var manifest = require('../manifest.json')

function start (cb) {
    ssbClient({ manifest }, function (err, sbot) {
        if (err) throw err
        // console.log('sbot', sbot)
        cb(err, sbot)
    })
}

console.log('client', require.main === module)
if (require.main === module) {
    start()
}

module.exports = start
