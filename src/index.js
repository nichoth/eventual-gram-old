var pull = require('pull-stream')
var ssbClient = require('ssb-client')

// create a scuttlebot client using default settings
// (server at localhost:8080, using key found at ~/.ssb/secret)
ssbClient(function (err, sbot) {
  if (err) throw err

  // publish a message
  sbot.publish({ type: 'post', text: 'My First Post!' }, function (err, msg) {
    // msg.key           == hash(msg.value)
    // msg.value.author  == your id
    // msg.value.content == { type: 'post', text: 'My First Post!' }
    // ...
  })

  // stream all messages in all feeds, ordered by publish time
  pull(
    sbot.createFeedStream(),
    pull.collect(function (err, msgs) {
      // msgs[0].key == hash(msgs[0].value)
      // msgs[0].value...
    })
  )

  // stream all messages in all feeds, ordered by receive time
  pull(
    sbot.createLogStream(),
    pull.collect(function (err, msgs) {
      // msgs[0].key == hash(msgs[0].value)
      // msgs[0].value...
    })
  )

  // stream all messages by one feed, ordered by sequence number
  pull(
    sbot.createHistoryStream(feedId),
    pull.collect(function (err, msgs) {
      // msgs[0].key == hash(msgs[0].value)
      // msgs[0].value...
    })
  )
})