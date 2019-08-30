import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
       
      {/* <iframe src="https://giphy.com/embed/3og0IJHMqlmPzy7sGs" width="480" height="309" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/namslam-dogdings-3og0IJHMqlmPzy7sGs"></a></p> */}
      <img src="https://img.icons8.com/officel/80/000000/dog.png"></img>
      <img src="https://img.icons8.com/color/96/000000/dog-house.png"></img> 

        <h1 className='FONT'>THE BALLAD OF TED RAINGER</h1> 
        <h3 className='FONT'>TAP Q, P & T to begin the race</h3>

      </div>

    )
  }
}
