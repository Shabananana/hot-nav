import React, {Component, PropTypes} from 'react';

export default class Notification extends Component {
  const NEW = 'NEW';
  const VIEWED = 'VIEWED';
  const accountStatuses =
    new Map([NEW, NEW], [VIEWED, VIEWED]);

  const static propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
      status: PropTypes.oneOf({
        accountStatuses.get(NEW),
        accountStatuses.get(VIEWED)
      }).isRequired
    })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
