var test = require('tape')
var startSbot = require('../src/server-side/start-ssb')

test('sbort starts', function (t) {
    var sbot = startSbot()
    t.ok(sbot)
})