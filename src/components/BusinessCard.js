import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bulma-components/full'

function getStarImage (rating) {
  let file = parseInt(rating)
  if (rating > file) {
    file = `${file}-half`
  }
  return `../images/stars/${file}.png`
}

function BusinessCard (props) {
  return (
    <Card style={{ marginBottom: 20 + 'px' }}>
      <Card.Content style={{ width: 30 + '%', display: 'inline-block', padding: 0, verticalAlign: 'middle' }}>
        <Card.Image size='1by1' src={props.image} />
      </Card.Content>
      <Card.Content style={{ width: 60 + '%', display: 'inline-block', verticalAlign: 'top' }}>
        <Link style={{ fontSize: 1.5 + 'rem' }} to={`/business/${props.id}`}>{props.name}</Link>
        <div className='rating'>
          <img className='stars' src={getStarImage(props.rating)} />
          <p>Based on {props.reviews} reviews</p>
        </div>
        <p>{props.price}</p>
        <p>{props.tags.map(tag => tag.title).join(', ')}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </Card.Content>
    </Card>
  )
}

export default BusinessCard
