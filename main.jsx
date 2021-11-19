import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/Components/App'

import './src/style/main.scss'

function main() {
  ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
  )
}

window.addEventListener("DOMContentLoaded", main)

