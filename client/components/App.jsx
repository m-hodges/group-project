import React from 'react'

import Header from './Header'
import Trail from './Trail'
import FinishLine from './FinishLine';


const App = () => {
  return (

    <> 
    <div className='header'>
      <Header />
       </div> 

      <div className='track'>
   
        <Trail />
      
      </div>
        <FinishLine />
      <div className='footer'>
        <span>Doggo 1</span> <span>Doggo 2</span> <span>Doggo 3</span>
      </div>
    </>
  )
}

export default App
