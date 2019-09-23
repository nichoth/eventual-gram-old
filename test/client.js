var test = require('tape')
var Server = require('../src/server-side/start-ssb')
var Client = require('../src/client')

var server = Server()
test('start client', function (t) {
    t.plan(1)
    Client(function (err, sbot) {
        if (err) throw err
        t.ok(sbot, 'got rpc sbot')
    })
})

test('done', function(t) {
    server.close()
    t.end()
})
