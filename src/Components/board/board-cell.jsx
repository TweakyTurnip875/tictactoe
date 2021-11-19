import React, {Component} from 'react'

const BoardCell = (props) => {
    var cl = props.value == "X" ? "#008dff" : "red"
    return (
      
      <div style={{boxShadow: "0 0 0 1px " + props.inverted}}>
        <button onClick={() => props.onClick()}>
          <span style={{color: cl,}}>
            {props.value}
          </span>
        </button>
      </div>

    )

}

export default BoardCell;