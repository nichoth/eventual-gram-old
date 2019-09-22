// var ssbKeys = require('ssb-keys')
// var ssbKeys = require('ssb-keys')
// var ssbConfigInject = require('ssb-config/inject')
var ssbConfig = require('ssb-config')
var path = require('path')
var ssbServer = require('ssb-server')
var fs = require('fs')

// @TODO check if global sbot is running and use that if possible
// @TODO can pass in config here
function startSSB () {
    var {
        SBOT_SHS,
        SBOT_SIGN,
        APP_NAME,
        NODE_ENV
    } = process.env
    console.log('env', SBOT_SHS, SBOT_SIGN, APP_NAME, NODE_ENV)

    // @TODO use passed in config
    // var appName = NODE_ENV === 'development' ? 'eg-DEV' : undefined
    // appName = APP_NAME ? APP_NAME : 'test-eg'

    var opts = {}
    if (process.env.NODE_ENV === 'development') {
        opts.caps = {
            shs: SBOT_SHS,
            sign: SBOT_SIGN
        }
    }

    // var config = ssbConfig()
    // var config = ssbConfigInject(appName, opts)
    // console.log('config', config)

    // var keyPath = path.join(config.path, 'secret')
    // config.keys = ssbKeys.loadOrCreateSync(keyPath)
    // error, warning, notice, or info (Defaults to notice)
    // config.logging.level = 'notice'

    ssbServer
        .use(require('ssb-master'))
        .use(require('ssb-gossip'))
        .use(require('ssb-replicate'))
        .use(require('ssb-backlinks'))
        // .call(null, config)

    var server = ssbServer(ssbConfig)

    var manifest = server.getManifest()
    fs.writeFileSync(
        path.join(ssbConfig.path, 'manifest.json'), // ~/.ssb/manifest.json
        JSON.stringify(manifest)
    )

    return server
}

if (require.main === module) {
    startSSB()
}

module.exports = startSSB
