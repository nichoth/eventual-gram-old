var test = require('tape')
var startSSB = require('../src/server-side/start-ssb')

var server
test('sbot starts', function (t) {
    t.plan(1)
    server = startSSB()
    t.ok(server)
})

test('done', function (t) {
    server.close(function (err) {
        if (err) throw err
        t.end()
        console.log('close')
    })
})
