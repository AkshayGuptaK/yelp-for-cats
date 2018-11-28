import React from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

import '../App.css'
import Landing from './Landing'
import SearchPage from './SearchPage'
import BusinessDetails from './BusinessDetails'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { businesses: [], total: 0, index: 1 }
  }
  componentDidMount () { // opening fetch req
    return null
  }
  render () {
    return (
      <div>
        <Route exact path='/' component={Landing} />
        <Route path='/search/:query' render={(props) => <SearchPage {...props} />} />
        <Route path='/business/:id' component={BusinessDetails} />
      </div>
    )
  }
}

export default hot(module)(App)
