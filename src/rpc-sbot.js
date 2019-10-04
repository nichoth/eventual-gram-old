var ssbClient = require('ssb-client')
var manifest = require('../manifest.json')
var ssbKeys = require('ssb-keys')

function start (opts, cb) {
    if (typeof opts === 'function') {
        cb = opts
        opts = {}
    }
    
    opts.manifest = opts.manifest || manifest
    opts.keys = opts.keys || ssbKeys.generate()
    opts.port = 9999
    ssbClient(opts, function (err, sbot) {
        if (err) throw err
        cb(err, sbot)
    })
}

console.log('client', require.main === module)
if (require.main === module) {
    start()
}

module.exports = start
