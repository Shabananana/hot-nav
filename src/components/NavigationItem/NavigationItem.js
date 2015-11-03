import React, {Component, PropTypes} from 'react';

export default class NavigationItem extends Component {
  const static propTypes = {
    navigationItem: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
      dropdownItems: PropTypes.array
    })
  }

  render() {
    return (
      <li>
      </li>
    );
  }
}
