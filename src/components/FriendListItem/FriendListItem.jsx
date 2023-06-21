import PropTypes from 'prop-types';

import {
  FriendItems,
  FriendIsOnline,
  FriendText,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItems>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <img src={avatar} alt={name} width="48px" />
      <FriendText>{name}</FriendText>
    </FriendItems>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
