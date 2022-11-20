import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Avatar,
  UserName,
  UserInfo,
  Stats,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export default function UserProfile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileWrap>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </div>

      <Stats key={username}>
        <li>
          <UserLabel>Followers:</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </li>
        <li>
          <UserLabel>Views:</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </li>
        <li>
          <UserLabel>Likes:</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </li>
      </Stats>
    </ProfileWrap>
  );
}

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
