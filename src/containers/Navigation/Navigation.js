import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(state => ({user: state.auth.user}))
export default class Navigation extends Component {
  const static propTypes = {
    profile: PropTypes.object,
    navigationItems: PropTypes.array,
    notifications: PropTypes.array
  }

  render() {
    return (
      <nav>
      </nav>
    );
  }
}
