var ssbConfig = require('ssb-config/inject')
var ssbServer = require('ssb-server')

// @TODO check if global sbot is running and use that if possible
// @TODO can pass in config here
function startSSB () {

    ssbServer
        .use(require('ssb-master'))
        .use(require('ssb-gossip'))
        .use(require('ssb-replicate'))
        .use(require('ssb-backlinks'))

    // var server = ssbServer(ssbConfig)
    var server = ssbServer(ssbConfig('test-eg', { port: 9999 }))
    // var server = ssbServer(ssbConfig('test-eg'))

    return server
}

if (require.main === module) {
    startSSB()
}

module.exports = startSSB
