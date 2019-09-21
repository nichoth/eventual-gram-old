// var ssbKeys = require('ssb-keys')
// var ssbClient = require('ssb-client')
var ssbKeys = require('ssb-keys')
var ssbConfigInject = require('ssb-config/inject')
var path = require('path')
// var sbot = require('scuttlebot')
var ssbServer = require('ssb-server')

// @TODO check if global sbot is running and use that if possible
// @TODO can pass in config here
module.exports = function startSSB () {
    var {
        SBOT_SHS,
        SBOT_SIGN,
        APP_NAME,
        NODE_ENV
    } = process.env
    // console.log('env', SBOT_SHS, SBOT_SIGN, APP_NAME, NODE_ENV)

    // @TODO use passed in config
    var appName = NODE_ENV === 'development' ? 'eg-DEV' : undefined
    appName = APP_NAME ? APP_NAME : 'test-eg'

    var opts = {}
    if (process.env.NODE_ENV === 'development') {
        opts.caps = {
            shs: SBOT_SHS,
            sign: SBOT_SIGN
        }
    }

    var config = ssbConfigInject(appName, opts)
    // console.log('config', config)
    // console.log('config', config)

    var keyPath = path.join(config.path, 'secret')
    config.keys = ssbKeys.loadOrCreateSync(keyPath)
    // error, warning, notice, or info (Defaults to notice)
    config.logging.level = 'notice'

    var server = ssbServer
        .use(require('ssb-master'))
        .use(require('ssb-gossip'))
        .use(require('ssb-replicate'))
        .use(require('ssb-backlinks'))
        .call(null, config)

    return server
}

// .use(require('scuttlebot/plugins/plugins'))
// .use(require('scuttlebot/plugins/master'))
// .use(require('scuttlebot/plugins/gossip'))
// .use(require('scuttlebot/plugins/replicate'))
// .use(require('ssb-friends'))
// .use(require('ssb-blobs'))
// .use(require('ssb-serve-blobs'))
// .use(require('ssb-backlinks'))
// .use(require('ssb-private'))
// .use(require('ssb-about'))
// .use(require('ssb-contacts'))
// .use(require('ssb-query'))
// .use(require('scuttlebot/plugins/invite'))
// .use(require('scuttlebot/plugins/local'))



// var keys = ssbKeys.loadOrCreateSync('./test-keys.key')

// ssbClient(keys, {
//     caps: {
//         shs: '',
//     },
//     manifest: '~/.ssb/manifest.json',
//     function (err, sbot, config) {
//         console.log('sbot', err, sbot, config)
//     }
// })

