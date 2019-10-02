var observ = require('observ')
var struct = require('observ-struct')

                ccc
function State () {
    var state = struct({
        foo: struct({ foo: observ('bar') }),
        route: struct({}),
        files: struct({
            seeding: observ([]),
            downloading: observ([])
       })
    })

    return state
}

module.exports = State
