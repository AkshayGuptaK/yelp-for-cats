import React from 'react'

function PolartoCartesian (r, theta) {
  let x = r * Math.cos(theta)
  let y = r * Math.sin(theta)
  return [x, y]
}

class Spinner extends React.Component {
  constructor (props) { // size and color
    super(props)
    this.state = ({ angle: 0 })
    this.canvas = React.createRef()
  }
  componentDidMount () {
    this.ctx = this.canvas.current.getContext('2d')
    this.loop()
  }
  componentWillUnmount () {
    cancelAnimationFrame(this.id)
  }
  translateCenter = (coords) => {
    return [coords[0] + this.props.size/2, coords[1] + this.props.size/2]
  }
  clear = () => {
    this.ctx.fillStyle = 'rgba(255,255,255,0.2)'
    this.ctx.fillRect(0, 0, this.props.size, this.props.size)
  }
  draw = () => {
    this.clear()
    this.ctx.beginPath()
    this.ctx.fillStyle = this.props.color
    let coords = this.translateCenter(PolartoCartesian(this.props.size * 0.4, this.state.angle))
    this.ctx.arc(coords[0], coords[1], 5, 0, 2 * Math.PI)
    this.ctx.fill()
    this.state.angle += 2 * Math.PI / 100
  }
  loop = () => {
    this.draw()
    this.id = requestAnimationFrame(this.loop)
  }
  render () {
    return (
      <canvas ref={this.canvas} width={this.props.size} height={this.props.size} />
    )
  }
}

export default Spinner
