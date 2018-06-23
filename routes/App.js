import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import What from './What'
import FourOhFour from './FourOhFour'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/home/0">Home</Link>
          <Link to="/what/potato">What</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" render={_ => <Redirect to="/home/0/" />} />
            <Route
              exact
              path="/home/:count"
              render={props => {
                const count = Number.parseInt(props.match.params.count, 10)

                return Number.isNaN(count) ? (
                  <FourOhFour />
                ) : (
                  <Home {...this.props} count={count} {...props} />
                )
              }}
            />
            <Route exact path="/what/:thing" component={What} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  msg: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

export default App
