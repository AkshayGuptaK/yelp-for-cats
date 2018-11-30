import React from 'react'

import BusinessCard from './BusinessCard'

class Landing extends React.Component {
  render () {
    return (
      <div>
        {this.props.data.businesses.map(business => {
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
    )
  }
}

export default Landing
