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
      <div className='card'>
        <img className='pic' src={this.props.image} />
        <div className='info'>
          <Link className='name' to={`/business/${this.props.id}`}>{this.props.name}</Link>
          <div className='rating'>
            <img className='stars' src={getStarImage(this.props.rating)} />
            <p>Based on {this.props.reviews} reviews</p>
          </div>
          <p>{this.props.price}</p>
          <p>{this.props.tags.map(tag => tag.title).join(', ')}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.address}</p>
        </div>
      </div>
    )
  }
}

export default BusinessCard
