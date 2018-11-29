import React from 'react'

import BusinessCard from './BusinessCard'
import fetchRequests from '../fetch'

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
      this.state.businesses.length > 0 ? (
        <div>
          <p>This is the search page</p>
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
              rating={business.rating}
              reviews={business.reviews}
            />
          })}
        </div>
      ) : <div>Please wait...</div>
    )
  }
}

export default SearchPage
