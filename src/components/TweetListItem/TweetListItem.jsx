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
} from './TweetListItem.styled';
import backgroundImage from '../../images/background.png';
import logo from '../../images/logo.png';

const ContactListItem = ({ name, tweets, avatar, followers }) => {
  return (
    <>
      <UserCard>
        <UserLogo src={logo}></UserLogo>
        <UserBackgroundImage src={backgroundImage} />
        <HorizontalLine />
        <UserAvatar>
          <UserImage src={avatar} alt="User image" />
        </UserAvatar>
        <UserTweets>{tweets} tweets</UserTweets>
        <UserFollowers>
          {String(followers / 1000).replace('.', ',')} followers
        </UserFollowers>
        <UsertBtn type="button">follow</UsertBtn>
      </UserCard>

      {/* <ContactBtn
        onClick={() => {
          toast.success(`${name} removed from the contact list.`);
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </ContactBtn> */}
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};

export default ContactListItem;
