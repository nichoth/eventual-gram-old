var test = require('tape')
var Server = require('../src/server-side/start-ssb')
var Client = require('../src/client')

var server
test('pre', function(t) {
    server = Server()
    t.end()
})

test('start client', function (t) {
    t.plan(1)
    Client(function (err, sbot) {
        if (err) throw err
        t.ok(sbot, 'got rpc sbot')
    })
})

test('done', function(t) {
    server.close(function () {
        t.end()
    })
})
