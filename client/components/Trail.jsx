import React from 'react'

class Trail extends React.Component {
  state = {
    style: {
      backgroundColor: 'aqua',
      height: '50px',
      width: '100px',
      display: 'inline-block',
      position: 'relative',
      top: '190px'
    },
    style2: {
      backgroundColor: 'green',
      height: '50px',
      width: '100px',
      display: 'inline-block',
      position: 'relative',
      top: '190px'
    },
    style3: {
      backgroundColor: 'hotpink',
      height: '50px',
      width: '100px',
      display: 'inline-block',
      position: 'relative',
      top: '190px'
    },
    counter: 100,
    counter2: 100,
    counter3: 100,

    finishedGame: 1400,
  }

  UNSAFE_componentWillMount () {
    document.addEventListener('keydown', this.buttonHandler.bind(this))
  }

  buttonHandler = evt => {


    if (evt.key === 'q') {
      this.setState({
        style: {
          backgroundColor: 'aqua',
          height: '50px',
          width: `${this.state.counter}px`,
          display: 'inline-block',
          position: 'relative',
          top: '190px'
        },
        counter: this.state.counter + 20,
        name: 'Blossom'
      })
      if (this.state.counter === this.state.finishedGame) {
        window.confirm(`${this.state.name} won!`)
        window.location = '#/winner'
      }
    } else if (evt.key === 'p') {
      this.setState({
        style2: {
          backgroundColor: 'green',
          height: '50px',
          width: `${this.state.counter2}px`,
          display: 'inline-block',
          position: 'relative',
          top: '190px'
        },
        counter2: this.state.counter2 + 20,
        name: 'Bubbles'
      })
      if (this.state.counter2 === this.state.finishedGame) {
        window.confirm(`${this.state.name} won!`)
        window.location = '#/winnertwo'
      }
    } else if (evt.key === 't') {
      this.setState({
        style3: {
          backgroundColor: 'hotpink',
          height: '50px',
          width: `${this.state.counter3}px`,
          display: 'inline-block',
          position: 'relative',
          top: '190px'
        },
        counter3: this.state.counter3 + 20,
        name: 'Buttercup'
      })
      if (this.state.counter3 === this.state.finishedGame) {
        window.confirm(`${this.state.name} won!`)
        window.location = '#/winnerthree'
      }
    }

  }

  render () {
    return (
      <>
      <div style={this.state.style} onKeyPress={this.buttonHandler}></div><img src="https://img.icons8.com/color/48/000000/yorkshire-terrier.png" className='doggo'></img>
      <p></p>
      <div style={this.state.style2} onKeyPress={this.buttonHandler}></div><img src="https://img.icons8.com/color/48/000000/german-shepherd.png" className='doggo'></img>
      <p></p>
      <div style={this.state.style3} onKeyPress={this.buttonHandler}></div><img src="https://img.icons8.com/color/48/000000/dog.png" className='doggo'></img>
      </>
    )
  }
}

export default Trail
