var test = require('tape')
var Server = require('../src/server-side/start-ssb')
var Client = require('../src/rpc-sbot')

var server
test('pre', function(t) {
    server = Server()
    t.end()
})

var sbot
test('start client', function (t) {
    t.plan(1)
    Client(function (err, _sbot) {
        if (err) throw err
        sbot = _sbot
        t.ok(_sbot, 'got rpc sbot')
    })
})

test('rpc call', function (t) {
    sbot.whoami(function (err, res) {
        t.plan(2)
        t.ok(res, 'should return via rpc')
        t.error(err, 'no error')
    })
})

test('done', function(t) {
    server.close(function () {
        t.end()
    })
})

