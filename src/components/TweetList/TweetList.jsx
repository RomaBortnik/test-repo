import TweetListItem from 'components/TweetListItem';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';

import { StyledTweetList } from './TweetList.styled';

const TweetList = () => {
  const users = useSelector(selectUsers);
  return (
    <StyledTweetList>
      {users.map(user => (
        <TweetListItem key={user.id} user={user}></TweetListItem>
      ))}
    </StyledTweetList>
  );
};

export default TweetList;
