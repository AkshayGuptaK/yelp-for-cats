import React from 'react'

import fetchRequests from '../fetch'

class BusinessDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  componentDidMount () {
    fetchRequests.getDetails(this.props.match.params.id)
      .then(res => this.setState(res))
      .then(res => console.log('tags', this.state.name, this.state.tags.map(tag => tag.title))) // debug
  }
  render () {
    return (
      (Object.keys(this.state).length > 0) ? (
        <div>
          <h2>{this.state.name}</h2>
          <p>{this.state.price}</p>
          <p>{this.state.phone}</p>
          <p>{this.state.address}</p>
          <p>{this.state.tags.map(tag => tag.title).join(' ')}</p>
          <img src={this.state.images[0]} />
          <img src={this.state.images[1]} />
          <img src={this.state.images[2]} />
          <p>Based on {this.state.reviews} reviews</p>
        </div>
      ) : (<div>Please wait...</div>)
    )
  }
}

export default BusinessDetails
