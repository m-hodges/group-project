import React, { Component } from 'react'


class Background extends Component {
  state = {
    style: {
      backgroundColor: 'yellow',
      height: '20px',
      width: '20px'
    },
    style2: {
      backgroundImage: `url(../../server/public/BattleJockey.jpg)`,
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
  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export default Background

