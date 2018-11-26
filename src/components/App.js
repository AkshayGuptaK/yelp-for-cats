import React from 'react'
import { hot } from 'react-hot-loader'

import '../App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
  }
  componentDidMount () { // opening fetch req
    return null
  }
  render () {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

export default hot(module)(App)
