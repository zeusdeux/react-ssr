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
          <Link to="/home">Home</Link>
          <Link to="/what/potato">What</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" render={_ => <Redirect to="/home" />} />
            <Route exact path="/home" render={props => <Home {...this.props} {...props} />} />
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
  initCount: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default App
