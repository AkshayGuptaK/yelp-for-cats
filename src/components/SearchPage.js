import React from 'react'

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

class SearchPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { query: props.match.params.query, businesses: [], total: 0, index: 1 }
  }
  componentDidMount () {
    fetchRequests.doSearch(this.state.query)
      .then(res => this.setState({ 'businesses': res.businesses, 'total': res.total }))
  }
  render () {
    return (
      <div>
        <p>This is the search page</p>
        <SearchForm location='Berkeley' />
        {this.state.businesses.map(business => {
          return <BusinessCard
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
          />
        })}
      </div>
    )
  }
}

export default SearchPage
