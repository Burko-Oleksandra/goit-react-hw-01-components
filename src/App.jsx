import { Wrapper } from 'App.styled';

import ProfileApp from './components/Profile/ProfileApp';
import StatisticsApp from './components/Statistics/StatisticsApp';
import FriendListApp from './components/FriendList/FriendListApp';
import TransactionHistoryApp from './components/TransactionHistory/TransactionHistoryApp';

export const App = () => {
  return (
    <Wrapper>
      <UserProfile
        avatar={User.avatar}
        username={User.username}
        tag={User.tag}
        location={User.location}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <StatisticsApp />
      <FriendListApp />
      <TransactionHistoryApp />
    </Wrapper>
  );
};
