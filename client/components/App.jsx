import React from 'react'
import { Route } from 'react-router-dom'

import Dog from './Dog'





import Trail from './Trail'

const App = () => {
  return (

    <>
      <div className='header'>
        <h1>Ted Rainger</h1>
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
