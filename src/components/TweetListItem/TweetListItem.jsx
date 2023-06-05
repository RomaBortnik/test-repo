import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/selectors';
import { toggleFollowing } from 'redux/operations';
import backgroundImage from '../../images/background.png';
import logo from '../../images/logo.png';
import Loader from 'components/Loader';
import {
  UserCard,
  HorizontalLine,
  UserAvatar,
  UserImage,
  UserBackgroundImage,
  UserTweets,
  UserFollowers,
  UsertBtn,
  UserLogo,
  UserUnfollowBtn,
} from './TweetListItem.styled';

const TweetListItem = ({ userCard }) => {
  const { user, avatar, tweets, followers, following } = userCard;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && <Loader />}
      <UserCard>
        <UserLogo src={logo}></UserLogo>
        <UserBackgroundImage src={backgroundImage} />
        <HorizontalLine />
        <UserAvatar>
          <UserImage src={avatar} alt={user} />
        </UserAvatar>
        <UserTweets>{tweets} tweets</UserTweets>
        <UserFollowers>
          {String((followers / 1000).toFixed(3)).replace('.', ',')} followers
        </UserFollowers>

        {!following ? (
          <UsertBtn
            type="button"
            onClick={() => dispatch(toggleFollowing({ user, value: 1 }))}
          >
            follow
          </UsertBtn>
        ) : (
          <UserUnfollowBtn
            type="button"
            onClick={() => dispatch(toggleFollowing({ user, value: -1 }))}
          >
            following
          </UserUnfollowBtn>
        )}
      </UserCard>

      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

TweetListItem.propTypes = {
  userCard: PropTypes.shape({
    tweets: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
  }),
};

export default TweetListItem;
