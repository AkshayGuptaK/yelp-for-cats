import React from 'react'

import SearchForm from './SearchForm'

function NavHeader (props) {
  return (
    <div id='nav'>
      <img id='logo' src='../images/nyan.jpeg' />
      <SearchForm location={props.location} />
    </div>
  )
}

export default NavHeader
