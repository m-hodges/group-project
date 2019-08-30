import React from 'react'
import { Route } from 'react-router-dom'

import Dog from './Dog'





const App = () => {
  return (
    <div className="div">
     <Route exact path="/" component={Dog} />
    <h1>React development has begun!</h1>
    </div>
  )
}

export default App
