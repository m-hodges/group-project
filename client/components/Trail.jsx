import React from 'react'

class Trail extends React.Component {
  state = {
    style: {
      backgroundColor: 'yellow',
      height: '20px',
      width: '20px'
    },
    counter: 20
  }

  buttonHandler = evt => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '20px',
        width: `${this.state.counter}px`
      },
      counter: this.state.counter + 20
    })
  }

  render () {
    return (
      <div style={this.state.style} onKeyDown={this.buttonHandler} tabIndex = '0'></div>
    )
  }
}

export default Trail
