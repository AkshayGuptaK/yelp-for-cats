import React from 'react'

import InputField from './InputField'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '', location: this.props.location }
  }
  handleClick = (event) => {
    this.props.submit(this.state.term, this.state.location)
  }
  render () {
    return (
      <div>
        <InputField
          class=''
          label='Search'
          placeholder='Enter a keyword or search term'
          value={this.state.term}
          update={(text) => this.setState({ term: text })}>
        </InputField>
        <InputField
          class=''
          label='Near'
          placeholder='Enter a location'
          value={this.state.location}
          update={(text) => this.setState({ location: text })}>
        </InputField>
        <button className='searchBtn' onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default SearchForm
