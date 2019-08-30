import React from 'react'

import Dog from './Dog'

import Header from './Header'
import Trail from './Trail'
import Background from './Background';

const App = () => {
  return (

    <> 
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
