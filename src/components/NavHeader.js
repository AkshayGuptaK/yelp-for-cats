import React from 'react'

import SearchForm from './SearchForm'

class NavHeader extends React.Component {
  render () {
    return (
      <div>
        <h1>Nyan!</h1>
        <h2>for cats</h2>
        <SearchForm location='Berkeley' />
        <h2>Powered by</h2>
        <img src='../images/yelp.png' />
      </div>
    )
  }
}

export default NavHeader
