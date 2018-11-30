import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Redirect, Switch } from 'react-router-dom'

import '../App.css'
import NavHeader from './NavHeader'
import Landing from './Landing'
import SearchPage from './SearchPage'
import BusinessDetails from './BusinessDetails'
import fetchRequests from '../fetch'

function withFetch (Component, requestFunc) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = { }
    }
    componentDidMount () {
      this.doFetch()
    }
    doFetch () {
      console.log('hoc props', this.props.match.params) // debug
      requestFunc(this.props.match.params.query)
        .then(res => this.setState(res))
        .then(res => console.log('state is', this.state)) // debug
    }
    render () {
      return (
        Object.keys(this.state).length > 0 ? (
          <Component data={this.state} {...this.props} />
        ) : <div>Please wait...</div>
      )
    }
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { location: 'Berkeley' }
  }
  render () {
    return ( // redirect / path to /location=${this.state.location}
      <div>
        <NavHeader location={this.state.location} />
        <Switch>
          <Route exact path='/location/:query' component={withFetch(Landing, fetchRequests.locDetails)} />
          <Route path='/search/:query' component={withFetch(SearchPage, fetchRequests.doSearch)} />
          <Route path='/business/:query' component={withFetch(BusinessDetails, fetchRequests.bizDetails)} />
          <Redirect to={`/location/${this.state.location}`} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
