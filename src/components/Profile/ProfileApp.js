import Profile from './Profile';
import User from 'components/Profile/user.json';

export default function ProfileApp() {
  return (
    <div>
      <Profile
        avatar={User.avatar}
        username={User.username}
        tag={User.tag}
        location={User.location}
        stats={User.stats}
      />
    </div>
  );
}
