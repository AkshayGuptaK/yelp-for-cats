import React from 'react'

function getStarImage (rating) {
  let file = parseInt(rating)
  if (rating > file) {
    file = `${file}-half`
  }
  return `../images/stars/${file}.png`
}

class BusinessDetails extends React.Component {
  displayOpen = () => {
    if (this.props.data.hours[0].is_open_now) {
      return <p style={{color: 'green'}}>Open</p>
    } return <p style={{color: 'red'}}>Closed</p>
  }
  render () {
    return (
      <div className='details'>
        <div className='imgs'>
          <img className='pic' src={this.props.data.images[0]} />
          <img className='pic' src={this.props.data.images[1]} />
          <img className='pic' src={this.props.data.images[2]} />
        </div>
        <div className='info'>
          <h1>{this.props.data.name}</h1>
          <div className='rating'>
            <img className='stars' src={getStarImage(this.props.data.rating)} />
            <p>Based on {this.props.data.reviews} reviews</p>
          </div>
          {this.displayOpen()}
          <p>{this.props.data.price}</p>
          <p>{this.props.data.tags.map(tag => tag.title).join(', ')}</p>
          <p>{this.props.data.phone}</p>
          <p>{this.props.data.address}</p>
        </div>
      </div>
    )
  }
}

export default BusinessDetails
