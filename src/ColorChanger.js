import React, { Component } from 'react'

class ColorChanger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hValue: Math.ceil(Math.random() * 360),
      sValue: Math.ceil(Math.random() * 100),
      lValue: Math.ceil(Math.random() * 100),
      aValue: Math.round((0.5 + Math.random() * 0.5) * 100) / 100
    }
  }

  changeTheHValue = event => {
    this.setState({
      hValue: event.target.value
    })
  }

  changeTheSValue = event => {
    this.setState({
      sValue: event.target.value
    })
  }

  changeTheLValue = event => {
    this.setState({
      lValue: event.target.value
    })
  }

  changeTheAValue = event => {
    this.setState({
      aValue: event.target.value
    })
  }

  generateRandomColor = event => {
    this.setState({
      hValue: Math.ceil(Math.random() * 360),
      sValue: Math.ceil(Math.random() * 100),
      lValue: Math.ceil(Math.random() * 100),
      aValue: Math.round((0.5 + Math.random() * 0.5) * 100) / 100
    })
  }

  render() {
    return (
      <main>
        <section className="top-section">
          <h1
            style={{
              textShadow: `0px 5px hsl(${this.state.hValue}, ${
                this.state.sValue
              }%, ${this.state.lValue}%, ${this.state.aValue})`
            }}
          >
            Color Picker
          </h1>
        </section>
        <section className="middle-section">
          <div className="square-div">
            <p className="title">Color</p>
            <div className="behind-square">
              <div
                className="square"
                style={{
                  backgroundColor: `hsl(${this.state.hValue}, ${
                    this.state.sValue
                  }%, ${this.state.lValue}%, ${this.state.aValue})`
                }}
              />
            </div>
          </div>
          <div className="sliders-div">
            <p className="title">Change the color:</p>
            <div>
              <label htmlFor="h">H</label>
              <input
                onChange={this.changeTheHValue}
                type="range"
                name="h"
                min="0"
                max="360"
                value={this.state.hValue}
              />
            </div>
            <div>
              <label htmlFor="s">S</label>
              <input
                onChange={this.changeTheSValue}
                type="range"
                name="s"
                min="0"
                max="100"
                value={this.state.sValue}
              />
            </div>
            <div>
              <label htmlFor="l">L</label>
              <input
                onChange={this.changeTheLValue}
                type="range"
                name="l"
                min="0"
                max="100"
                value={this.state.lValue}
              />
            </div>
            <div>
              <label htmlFor="a">A</label>
              <input
                onChange={this.changeTheAValue}
                type="range"
                name="a"
                min="0"
                max="1"
                step=".01"
                value={this.state.aValue}
              />
            </div>
          </div>
        </section>
        <section className="bottom-section">
          <div className="button-div">
            <button onClick={this.generateRandomColor}>Random Color!</button>
          </div>
          <div className="hsla-div">
            <p className="hsla-text">
              hsla({this.state.hValue}, {this.state.sValue}%,{' '}
              {this.state.lValue}
              %, {this.state.aValue})
            </p>
          </div>
        </section>
      </main>
    )
  }
}

export default ColorChanger
