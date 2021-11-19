import React, { Component } from 'react'

import BoardCell from './board-cell'

export default class BoardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculateWinner = this.calculateWinner.bind(this)
    this.restart = this.restart.bind(this)
  }
  handleClick(i) {
    const squares = this.state.squares.slice()
    if(this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }
  restart() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
  }
  renderSquare(i) {
    return (
      <BoardCell inverted={this.props.inverted} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    )
  }
  calculateWinner(sq) {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ]
    for(var i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i]
      if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c]){
        return sq[a]
      }
    }
    return null;
  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    var status;
    if(winner) {
      status = (
        <div>Winner is: {!this.state.xIsNext ? (
        <span style={{color: "#008dff"}}>X</span>
       ) : (
         <span style={{color: "red"}}>O</span>
       )}
      </div>)
    } else {
      status = (
        <div>Next player: 
        {this.state.xIsNext ? (
           <span style={{color: "#008dff"}}> X</span> 
        ) : ( 
          <span style={{color: "red"}}> O</span>
        )}
        </div>
      )
    }
  return (
    <div className="board-container">
    <h1>{status}</h1>
      <div className="board-grid-container">
        <div className="board-grid-wrapper">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {winner ? (
        <div className="restart">
          <button onClick={this.restart} >Play Again</button>
        </div>
      ) : (
        <div className="restart">
          <button onClick={this.restart} >Restart</button>
        </div>
      )}
      </div>

    </div>
  )
  }
}