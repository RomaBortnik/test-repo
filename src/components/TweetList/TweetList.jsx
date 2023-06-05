import TweetListItem from 'components/TweetListItem';
import { useSelector } from 'react-redux';

import { selectVisibleUsers } from 'redux/selectors';
import { StyledTweetList } from './TweetList.styled';

const TweetList = () => {
  const users = useSelector(selectVisibleUsers);
  return (
    <StyledTweetList>
      {users.map(user => (
        <TweetListItem key={user.id} userCard={user}></TweetListItem>
      ))}
    </StyledTweetList>
  );
};

export default TweetList;
