import React from 'react'

import InputField from './InputField'

class InputForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: props.value }
  }
  search = (event) => {
    return (this.state.value)
  }
  render () {
    return (
      <div>
        <InputField
          class=''
          label='Search'
          placeholder=''
          value={this.state.value}
          update={(text) => this.setState({ value: text })}>
        </InputField>
        <button className='searchBtn' onClick={this.search}></button>
      </div>
    )
  }
}

export default InputForm
