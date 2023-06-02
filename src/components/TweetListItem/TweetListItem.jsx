import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import backgroundImage from '../../images/background.png';
import logo from '../../images/logo.png';
import Loader from 'components/Loader';

const ContactListItem = ({ name, tweets, avatar, followers, id }) => {
  const [followed, setFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [isLoading, setisLoading] = useState(false);

  const follow = async value => {
    setisLoading(true);
    try {
      await axios.put(`users/${id}`, { followers: followers + 1 });
      setFollowed(true);
      setFollowersCount(prevValue => prevValue + 1);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      return error;
    }
  };

  const unFollow = async value => {
    setisLoading(true);
    try {
      await axios.put(`users/${id}`, { followers: followers - 1 });
      setFollowed(false);
      setFollowersCount(prevValue => prevValue - 1);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      return error;
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <UserCard>
        <UserLogo src={logo}></UserLogo>
        <UserBackgroundImage src={backgroundImage} />
        <HorizontalLine />
        <UserAvatar>
          <UserImage src={avatar} alt="User image" />
        </UserAvatar>
        <UserTweets>{tweets} tweets</UserTweets>
        <UserFollowers>
          {String((followersCount / 1000).toFixed(3)).replace('.', ',')}{' '}
          followers
        </UserFollowers>

        {!followed ? (
          <UsertBtn type="button" onClick={follow}>
            follow
          </UsertBtn>
        ) : (
          <UserUnfollowBtn type="button" onClick={unFollow}>
            following
          </UserUnfollowBtn>
        )}
      </UserCard>

      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
