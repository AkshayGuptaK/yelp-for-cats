import React from 'react'

import SearchForm from './SearchForm'

class NavHeader extends React.Component {
  render () {
    return (
      <div id='nav'>
        <img id='logo' src='../images/nyan.jpeg' />
        <SearchForm location={this.props.location} />
      </div>
    )
  }
}

export default NavHeader
