import React from 'react'

class BusinessDetails extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.data.name}</h2>
        <p>{this.props.data.price}</p>
        <p>{this.props.data.phone}</p>
        <p>{this.props.data.address}</p>
        <p>{this.props.data.tags.map(tag => tag.title).join(', ')}</p>
        <img src={this.props.data.images[0]} />
        <img src={this.props.data.images[1]} />
        <img src={this.props.data.images[2]} />
        <p>Based on {this.props.data.reviews} reviews</p>
      </div>
    )
  }
}

export default BusinessDetails
