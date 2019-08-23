import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import Login from "./Login"

class AuthGate extends Component {
  render() {
    const { authenticated } = this.props;

    if (!authenticated) {
      return (
        <Login/>
      )
    } else {
      return <div>
        {this.props.children}
      </div>
    }
  }
}

AuthGate.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

AuthGate = connect(() => {
  return {
    authenticated: false,
  }
})(AuthGate);

export default AuthGate;