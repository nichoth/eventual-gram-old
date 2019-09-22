var test = require('tape')
var Server = require('../src/server-side/start-ssb')
// var Client = require('../src/client')

var server = Server()
test('example', function (t) {
    t.plan(1)
    t.pass('ok')
})

test('done', function(t) {
    server.close()
    t.end()
})
