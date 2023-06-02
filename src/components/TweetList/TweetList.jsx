import TweetListItem from 'components/TweetListItem';

import { StyledTweetList } from './TweetList.styled';

const TweetList = ({ tweets }) => {
  return (
    <StyledTweetList>
      {tweets.map(({ user, tweets, id, avatar, followers }) => (
        <TweetListItem
          key={id}
          name={user}
          tweets={tweets}
          avatar={avatar}
          followers={followers}
        ></TweetListItem>
      ))}
    </StyledTweetList>
  );
};

export default TweetList;
