import React, {Component, PropTypes} from 'react';

export default class DropdownItem extends Component {
  const static propTypes = {
    dropdownItem: PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <li>
      </li>
    );
  }
}
