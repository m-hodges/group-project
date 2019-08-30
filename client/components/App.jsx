import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Trail from './Trail'
import Winner from './Winner'
import WinnerTwo from './WinnerTwo'
import WinnerThree from './WinnerThree'


const App = () => {
  return (
    <>
      <Route path="/winner" component={Winner} />
      <Route path="/winnertwo" component={WinnerTwo} />
      <Route path="/winnerthree" component={WinnerThree} />

    <div className='header'>
      <Header />
       </div> 

      <div className='track'>
   
        <Trail />
      
      </div>

      <div className='footer'>
        <span>Doggo 1</span> <span>Doggo 2</span> <span>Doggo 3</span>
      </div>
    </>
  )
}

export default App
