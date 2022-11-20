import PropTypes from 'prop-types';
import { UserImg } from './FriendList.styled';

export default function FriendListItem({ avatar, name }) {
  return (
    <>
      <UserImg src={avatar} alt="User avatar" width="80" height="80" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
