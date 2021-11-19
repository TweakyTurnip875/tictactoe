import React, { Component } from 'react';

import BoardContainer from './board/board-container'

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      darkTheme: false,
    }
    this.handleThemeToggle = this.handleThemeToggle.bind(this)
  }
  handleThemeToggle() {
    this.setState({
      darkTheme: !this.state.darkTheme,
    })
  }
  render() {
    const main = this.state.darkTheme ? "#1d2229" : "white"
    const inverted = this.state.darkTheme ? "white" : "black"
    return (
      <div style={{
        backgroundColor: main,
        color: inverted,
        height: "100vh",
        }}>
        <div>
        <button className="toggle" onClick={() => this.handleThemeToggle()}>
        Theme
        </button>
        </div>
        <BoardContainer inverted={inverted}/>
      </div>
    )
  }
}