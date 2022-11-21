import { Wrapper } from 'App.styled';

import ProfileApp from './components/Profile/ProfileApp';
import StatisticsApp from './components/Statistics/StatisticsApp';
import FriendListApp from './components/FriendList/FriendListApp';
import TransactionHistoryApp from './components/TransactionHistory/TransactionHistoryApp';

export const App = () => {
  return (
    <Wrapper>
      <ProfileApp />
      <StatisticsApp />
      <FriendListApp />
      <TransactionHistoryApp />
    </Wrapper>
  );
};
