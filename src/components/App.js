import React from 'react'
import { hot } from 'react-hot-loader'

import '../App.css'
import SearchForm from './SearchForm'
import BusinessCard from './BusinessCard'
import fetchRequests from '../fetch'

function getStarImage (rating) {
  let file = parseInt(rating)
  if (rating > file) {
    file = `${file}-half`
  }
  return `images/stars/${file}.png`
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { businesses: [], total: 0, index: 1 }
  }
  componentDidMount () { // opening fetch req
    return null
  }
  doSearch = (term, location) => {
    fetchRequests.doSearch(term, location)
    .then(res => this.setState({ 'businesses': res.businesses, 'total': res.total }))
  }
  render () {
    return (
      <div>
        <SearchForm location='Berkeley' submit={this.doSearch}></SearchForm>
        {this.state.businesses.map(business => 
          {return <BusinessCard
            key={business.id}
            id={business.id}
            name={business.name}
            image={business.image}
            price={business.price}
            tags={business.tags}
            phone={business.phone}
            address={business.address}
            rating={getStarImage(business.rating)}
            reviews={business.reviews}
            >
          </BusinessCard>}
        )}
      </div>
    )
  }
}

export default hot(module)(App)
