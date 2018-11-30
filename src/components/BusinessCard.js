import React from 'react'
import { Link } from 'react-router-dom'

function getStarImage (rating) {
  let file = parseInt(rating)
  if (rating > file) {
    file = `${file}-half`
  }
  return `../images/stars/${file}.png`
}

class BusinessCard extends React.Component {
  render () {
    return (
      <div>
        <img src={this.props.image} />
        <Link to={`/business/${this.props.id}`}>{this.props.name}</Link>
        <p>{this.props.price}</p>
        <p>{this.props.tags.map(tag => tag.title).join(', ')}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.address}</p>
        <img src={getStarImage(this.props.rating)} />
        <p>Based on {this.props.reviews} reviews</p>
      </div>
    )
  }
}

export default BusinessCard
