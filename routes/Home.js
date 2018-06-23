import React from 'react'
import PropTypes from 'prop-types'
import './app.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initCount
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <p>{this.state.count}</p>
        <p>{this.props.time}</p>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
          Increment
        </button>
      </div>
    )
  }
}

Home.propTypes = {
  msg: PropTypes.string.isRequired,
  initCount: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default Home
