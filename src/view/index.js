var { h } = require('preact')

function App (props) {
    console.log('render', props)
    return <div>
        hello world
        <ul>
            <li><a href="/foo">foo</a></li>
            <li><a href="/bar">bar</a></li>
        </ul>
    </div>
}

module.exports = App