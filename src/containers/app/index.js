import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Privacy from '../privacy'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/privacy-policy' component={Privacy} />
        </main>
      </div>
    )
  }
}

export default App
