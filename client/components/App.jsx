import React from 'react'

import { Route } from 'react-router-dom'

import Header from './Header'
import Trail from './Trail'
import Footer from './Footer'

import FinishLine from './FinishLine';

import Winner from './Winner'


const App = () => {
  return (
    <>
      <Route path="/winner" component={Winner} />

    <div className='header'>
      <Header />
       </div> 

      <div className='track'>
   
        <Trail />
      
      </div>
        <FinishLine />
      <div className='footer'>
        <Footer />
        <span>Doggo 1</span> <span>Doggo 2</span> <span>Doggo 3</span>
      </div>
    </>
  )
}

export default App
