import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Container, Footer } from 'react-bulma-components/full'

import '../App.css'
import NavHeader from './NavHeader'
import Landing from './Landing'
import SearchPage from './SearchPage'
import BusinessDetails from './BusinessDetails'
import Spinner from './Spinner'
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
      requestFunc(this.props.match.params.query)
        .then(res => this.setState(res))
    }
    render () {
      return (
        Object.keys(this.state).length > 0 ? (
          <Component data={this.state} {...this.props} />
        ) : <Spinner size={300} color='#000000' />
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
    return (
      <Container>
        <NavHeader location={this.state.location} />
        <Switch>
          <Route exact path='/location/:query' component={withFetch(Landing, fetchRequests.locDetails)} />
          <Route path='/search/:query' component={withFetch(SearchPage, fetchRequests.doSearch)} />
          <Route path='/business/:query' component={withFetch(BusinessDetails, fetchRequests.bizDetails)} />
          <Redirect to={`/location/${this.state.location}`} />
        </Switch>
        <Footer>
          <div id='credit'>
            <h2>Powered by</h2>
            <img id='yelp_logo' src='../images/yelp.png' />
          </div>
        </Footer>
      </Container>
    )
  }
}

export default hot(module)(App)
