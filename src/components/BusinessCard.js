import React from 'react'

class BusinessCard extends React.Component {
  render () {
    return (
      <div>
        <img src={this.props.image} />
        <h2>{this.props.name}</h2>
        <p>{this.props.price}</p>
        <p>{this.props.tags}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.address}</p>
        <img src={this.props.rating} />
        <p>Based on {this.props.reviews} reviews</p>
      </div>
    )
  }
}

export default BusinessCard
