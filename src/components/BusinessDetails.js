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
  displayHours = (data) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return <p>{
      data.map(dayData => `${days[dayData.day]}: ${dayData.start} - ${dayData.end}`)
          .map((str, index) => <React.Fragment key={index}>{str}<br/></React.Fragment>)
    }</p>
  }
  render () {
    console.log('Business detail props are', this.props)
    return (
      <Container>
        <Content style={{ verticalAlign: 'top' }}>
          <h1>{this.props.data.name}</h1>
          <div className='rating'>
            <img className='stars' src={getStarImage(this.props.data.rating)} />
            <p>Based on {this.props.data.reviewCount} reviews</p>
          </div>
          {this.displayOpen()}
          <p>{this.props.data.price}</p>
          <p>{this.props.data.tags.map(tag => tag.title).join(', ')}</p>
        </Content>
        <div className='imgContainer'>
          <Image size='1by1' src={this.props.data.images[0]} />
        </div>
        <div className='imgContainer'>
          <Image size='1by1' src={this.props.data.images[1]}/>
        </div>
        <div className='imgContainer'>
          <Image size='1by1' src={this.props.data.images[2]}/>
        </div>
        <Content>
          <h3>Reviews</h3>
          {this.props.data.reviews.map((review, index) => {
            return <ReviewCard key={index} {...review}/>
          })}
          <h3>Contact Details</h3>
          <p>{this.props.data.phone}</p>
          <p>{this.props.data.address}</p>
          <h3>Hours of Operation</h3>
          {this.displayHours(this.props.data.hours[0].open)}
        </Content>
      </Container>
    )
  }
}

function ReviewCard (props) {
  return (
    <Content>
      <p>{props.time}</p>
      <div className='rating'>
        <img className='stars' src={getStarImage(props.rating)} />
        <p>By {props.user}</p>
      </div>
      <p>{props.text}</p>
    </Content>
  )
}

export default BusinessDetails
