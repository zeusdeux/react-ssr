import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <App msg="Hallo Leute! Ich lebe grade!" initCount={20} time={Date.now()} />
  </BrowserRouter>,
  document.querySelector('main')
)
