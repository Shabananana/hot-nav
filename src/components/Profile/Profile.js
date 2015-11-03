import React, {Component, PropTypes} from 'react';

export default class Profile extends Component {
  const ACTIVE = 'ACTIVE';
  const BANNED = 'BANNED';
  const accountStatuses =
    new Map([ACTIVE, ACTIVE], [BANNED, BANNED]);

  const static propTypes = {
    profile: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      balance: PropTypes.number.isRequired,
      status: PropTypes.oneOf({
        accountStatuses.get(ACTIVE),
        accountStatuses.get(BANNED)
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
