var Sbot = require('./rpc-sbot')
var { render } = require('preact')
var state = require('./state')
var connect = require('@nichoth/preact-connect')
var View = require('./view')
var Bus = require('@nichoth/events')

var bus = Bus({ memo: true })
var _view = connect({ state, bus, view: View })

render(h(_view), document.getElementById('content'))

Sbot(function (err, sbot) {
    if (err) throw err
    console.log('sbot', sbot)
})

if (process.env.NODE_ENV === 'development') {
    window.app = {
        state,
        effects,
        view: bus,
        evs
    }
}
