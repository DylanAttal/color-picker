import React, { Component } from 'react'
import ColorChanger from './ColorChanger'

class Square extends Component {
  render() {
    return (
      <div>
        <p>Color</p>
        <div
          className="square"
          style={{
            backgroundColor: `hsl({this.state.hValue},{this.state.sValue},{lValue})`
          }}
        />
      </div>
    )
  }
}

export default Square
