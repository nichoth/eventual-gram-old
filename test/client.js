var test = require('tape')
var Server = require('../src/server-side/start-ssb')
var Client = require('../src/rpc-sbot')
var ssbKeys = require('ssb-keys')

var server
test('pre', function(t) {
    server = Server()
    t.end()
})

var sbot
test('start client', function (t) {
    t.plan(1)
    var keys = ssbKeys.generate()
    Client({ keys }, function (err, _sbot) {
        if (err) throw err
        sbot = _sbot
        t.ok(_sbot, 'rpc sbot')
    })
})

test('rpc call', function (t) {
    var keys = ssbKeys.generate()
    sbot.whoami({ keys }, function (err, res) {
        t.plan(2)
        t.ok(res, 'should return via rpc')
        t.error(err, 'no error')
    })
})

test('all done', function(t) {
    server.close(function (err) {
        if (err) throw err
        t.end()
    })
})

