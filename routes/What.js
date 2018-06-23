import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ match }) => <h2>What is that {match.params.thing} doing here?</h2>

Home.propTypes = {
  match: PropTypes.object
}

export default Home
