import UserProfile from './Profile';
import User from 'components/Profile/user.json';

export default function ProfileApp() {
  return (
    <UserProfile
      avatar={User.avatar}
      username={User.username}
      tag={User.tag}
      location={User.location}
      followers={User.stats.followers}
      views={User.stats.views}
      likes={User.stats.likes}
    />
  );
}
