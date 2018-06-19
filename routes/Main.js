import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.hydrate(
  <App msg="Hallo Leute! Ich lebe grade!" initCount={20} />,
  document.querySelector('main')
)
