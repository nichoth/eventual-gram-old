var test = require('tape')
var startSSB = require('../src/server-side/start-ssb')

test('sbort starts', function (t) {
    t.plan(1)
    var server = startSSB()
    t.ok(server)
    server.close(function () {
        console.log('close')
    })
})


