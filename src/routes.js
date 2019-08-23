import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AuthGate from "./login/AuthGate"

class Routes extends Component {
  render() {
    return (
      <AuthGate>
      </AuthGate>
    );
  }
}

Routes.propTypes = {
};

export default Routes;