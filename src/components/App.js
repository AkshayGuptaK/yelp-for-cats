import React from 'react'
import { hot } from 'react-hot-loader'

import '../App.css'
import SearchForm from './SearchForm'
import fetchRequests from '../fetch'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
  }
  componentDidMount () { // opening fetch req
    return null 
  }
  doSearch = (term, location) => {
    fetchRequests.doSearch(term, location)
  }
  render () {
    return (
      <div>
        <SearchForm location='Berkeley' submit={this.doSearch}></SearchForm>
        <p>Hello</p>
      </div>
    )
  }
}

export default hot(module)(App)
