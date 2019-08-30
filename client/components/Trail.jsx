import React from 'react'

class Trail extends React.Component {
  state = {
    style: {
      backgroundColor: 'yellow',
      height: '100px',
      width: '100px',
      display: 'inline-block',
    },
    style2: {
      backgroundColor: 'red',
      height: '100px',
      width: '100px',
      display: 'inline-block',
    },
    style3: {
      backgroundColor: 'blue',
      height: '100px',
      width: '100px',
      display: 'inline-block',
    },
    counter: 100,
    counter2: 100,
    counter3: 100,

    finishedGame: 1360,
  }

  UNSAFE_componentWillMount () {
    document.addEventListener('keydown', this.buttonHandler.bind(this))
  }

  buttonHandler = evt => {


    if (evt.key === 'q') {
      this.setState({
        style: {
          backgroundColor: 'yellow',
          height: '100px',
          width: `${this.state.counter}px`,
          display: 'inline-block',
        },
        counter: this.state.counter + 20,
        name: 'Blossom'
      })
      if (this.state.counter === this.state.finishedGame) {
        alert(`${this.state.name} won!`)
        this.setState({
        counter: 100,
        style: {
          backgroundColor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        counter2: 100,
        style2: {
          backgroundColor: 'red',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        count3: 100,
        style3: {
          backgroundColor: 'blue',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        }
        })
      }
    } else if (evt.key === 'p') {
      this.setState({
        style2: {
          backgroundColor: 'red',
          height: '100px',
          width: `${this.state.counter2}px`,
          display: 'inline-block',
        },
        counter2: this.state.counter2 + 20,
        name: 'Bubbles'
      })
      if (this.state.counter2 === this.state.finishedGame) {
        alert(`${this.state.name} won!`)
        this.setState({
        counter: 100,
        style: {
          backgroundColor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        counter2: 100,
        style2: {
          backgroundColor: 'red',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        count3: 100,
        style3: {
          backgroundColor: 'blue',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        }
      })
      }
    } else if (evt.key === ' ') {
      this.setState({
        style3: {
          backgroundColor: 'blue',
          height: '100px',
          width: `${this.state.counter3}px`,
          display: 'inline-block',
        },
        counter3: this.state.counter3 + 20,
        name: 'Buttercup'
      })
      if (this.state.counter3 === this.state.finishedGame) {
        alert(`${this.state.name} won!`)
        this.setState({
        counter: 100,
        style: {
          backgroundColor: 'yellow',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        counter2: 100,
        style2: {
          backgroundColor: 'red',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        },

        count3: 100,
        style3: {
          backgroundColor: 'blue',
          height: '100px',
          width: '100px',
          display: 'inline-block',
        }
      })
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
