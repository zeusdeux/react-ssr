import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './app.css'

const Home = ({ msg, count, time }) => {
  return (
    <div>
      <h1>{msg}</h1>
      <p>{count}</p>
      {
        // suppressing hydration warning since the time stamp
        // will most certainly be differnt on client when .hydrate
        // runs vs when the server render happen
      }
      <p suppressHydrationWarning>{time}</p>
      <Link to={`/home/${count + 1}`}>
        <button>Increment</button>
      </Link>
    </div>
  )
}

Home.propTypes = {
  msg: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default Home
