import FriendListItem from './FriendListItem';
import friends from 'components/FriendList/friends.json';
import {
  Wrapper,
  Item,
  UserStatusOn,
  UserStatusOff,
} from './FriendList.styled';

export default function FriendListApp() {
  return (
    <Wrapper>
      {friends.map(friend => (
        <Item key={friend.id}>
          {friend.isOnline ? <UserStatusOn /> : <UserStatusOff />}
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Item>
      ))}
    </Wrapper>
  );
}
