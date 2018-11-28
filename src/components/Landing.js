import React from 'react'

import SearchForm from './SearchForm'

class Landing extends React.Component {
  setSearchRoute = () => {
    return null // create this
  }
  render () {
    return (
      <div>
        <p>This is the landing page</p>
        <SearchForm location='Berkeley' />
      </div>
    )
  }
}

export default Landing
