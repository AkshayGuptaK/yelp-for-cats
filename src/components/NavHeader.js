import React from 'react'

import SearchForm from './SearchForm'

class NavHeader extends React.Component {
  render () {
    return (
      <div>
        <img id='logo' src='../images/nyan.jpeg' />
        <h2>for cats</h2>
        <SearchForm location={this.props.location} />
        <h2>Powered by</h2>
        <img id='yelp_logo' src='../images/yelp.png' />
      </div>
    )
  }
}

export default NavHeader
