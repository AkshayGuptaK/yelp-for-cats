import React from 'react'
import { Link } from 'react-router-dom'

import InputField from './InputField'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '', location: this.props.location }
  }
  render () {
    return (
      <div>
        <InputField
          class=''
          label='Search'
          placeholder='Enter a keyword or search term'
          value={this.state.term}
          update={(text) => this.setState({ term: text })} />
        <InputField
          class=''
          label='Near'
          placeholder='Enter a location'
          value={this.state.location}
          update={(text) => this.setState({ location: text })} />
        <Link to={`/search/term=${this.state.term}&location=${this.state.location}`}>
          <button className='searchBtn' />
        </Link>
      </div>
    )
  }
}

export default SearchForm
