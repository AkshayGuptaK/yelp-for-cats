import React from 'react'

class InputField extends React.Component {
  // input field that submits changes to parent and receives updated values back
  render () {
    return (
      <div className={this.props.class}>
        <p>{this.props.label}</p>
        <input
          type='text'
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={(e) => { this.props.update(e.target.value) }}>
        </input>
      </div>
    )
  }
}

export default InputField
