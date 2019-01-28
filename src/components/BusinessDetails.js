import React from 'react'
import { Container, Content, Image } from 'react-bulma-components/full'

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
      <Container className='details'>
        <Content style={{ width: 30 + '%', display: 'inline-block', padding: 0, verticalAlign: 'top' }}>
          <Image size='1by1' src={this.props.data.images[0]} />
          <Image size='1by1' src={this.props.data.images[1]} />
          <Image size='1by1' src={this.props.data.images[2]} />
        </Content>
        <Content style={{ width: 60 + '%', display: 'inline-block', verticalAlign: 'top' }}>
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
        </Content>
      </Container>
    )
  }
}

export default BusinessDetails
