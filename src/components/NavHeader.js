import React from 'react'

import SearchForm from './SearchForm'

class NavHeader extends React.Component {
  render () {
    return (
      <div id='nav'>
        <img id='logo' src='../images/nyan.jpeg' />
        <SearchForm location={this.props.location} />
        <div id='credit'>
          <h2>Powered by</h2>
          <img id='yelp_logo' src='../images/yelp.png' />
        </div>
      </div>
    )
  }
}

export default NavHeader
