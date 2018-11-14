import React, { Component } from 'react'
import './App.css'
import ColorChanger from './ColorChanger'
import { grey } from 'ansi-colors'

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#2a2a2a',
          height: '100vh'
        }}
      >
        <ColorChanger />
      </div>
    )
  }
}

export default App
