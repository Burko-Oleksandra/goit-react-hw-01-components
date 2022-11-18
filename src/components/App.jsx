import ProfileApp from './Profile/ProfileApp';
import StatisticsApp from './Statistics/StatisticsApp';
import FriendListApp from './FriendList/FriendListApp';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// import TransactionHistoryApp from './TransactionHistory/TransactionHistoryApp';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileApp />
      <StatisticsApp />
      <FriendListApp />
      <TransactionHistory />
    </div>
  );
};
