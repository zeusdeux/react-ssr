import React from 'react'
import PropTypes from 'prop-types'
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initCount
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.msg}</h1>
        <p>{this.state.count}</p>
        <p>{this.props.time}</p>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
          Increment
        </button>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  msg: PropTypes.string.isRequired,
  initCount: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default App
