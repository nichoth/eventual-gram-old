var { h } = require('preact')

function App (props) {
    console.log('render', props)
    // return h('div', {}, ['hello world'])
    // return h('div', {}, ['hello world'])
    return <div>hello world</div>
}

module.exports = App