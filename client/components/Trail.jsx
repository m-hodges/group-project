import React from 'react'

class Trail extends React.Component {
  state = {
    style: {
      backgroundColor: 'yellow',
      height: '20px',
      width: '20px'
    },
    style2: {
      backgroundColor: 'red',
      height: '20px',
      width: '20px'
    },
    style3: {
      backgroundColor: 'blue',
      height: '20px',
      width: '20px'
    },
    counter: 20,
    counter2: 20,
    counter3: 20
  }

  UNSAFE_componentWillMount () {
    document.addEventListener('keydown', this.buttonHandler.bind(this))
  }

  buttonHandler = evt => {
    if (evt.key === 'q') {
      this.setState({
        style: {
          backgroundColor: 'yellow',
          height: '20px',
          width: `${this.state.counter}px`
        },
        counter: this.state.counter + 20
      })
    } else if (evt.key === 'p') {
      this.setState({
        style2: {
          backgroundColor: 'red',
          height: '20px',
          width: `${this.state.counter2}px`
        },
        counter2: this.state.counter2 + 20
      })
    } else if (evt.key === ' ') {
      this.setState({
        style3: {
          backgroundColor: 'blue',
          height: '20px',
          width: `${this.state.counter3}px`
        },
        counter3: this.state.counter3 + 20
      })
    }
  }

  render () {
    return (
      <>
      <div style={this.state.style} onKeyPress={this.buttonHandler}></div>
      <div style={this.state.style2} onKeyPress={this.buttonHandler}></div>
      <div style={this.state.style3} onKeyPress={this.buttonHandler}></div>
      </>
    )
  }
}

export default Trail
