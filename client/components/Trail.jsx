import React from 'react'

class Trail extends React.Component {
  state = {
    style: {
      backgroundColor: 'yellow',
      height: '20px',
      width: '20px'
    }
  }

  buttonHandler = evt => {
    console.log(evt)
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '20px',
        width: '30px'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style} onKeyDown={this.buttonHandler} tabIndex="0"></div>
    )
  }
}

export default Trail
