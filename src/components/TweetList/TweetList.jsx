import TweetListItem from 'components/TweetListItem';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectStatusFilter, selectVisibleUsers } from 'redux/selectors';
import { StyledTweetList } from './TweetList.styled';

const TweetList = () => {
  const users = useSelector(selectVisibleUsers);
  const filterStatus = useSelector(selectStatusFilter);

  users.length === 0 &&
    (filterStatus === 'following' || filterStatus === 'unfollowing') &&
    toast.warning('There are no users matching your request yet.');

  return (
    <>
      <StyledTweetList>
        {users.map(user => (
          <TweetListItem key={user.id} userCard={user}></TweetListItem>
        ))}
      </StyledTweetList>
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

export default TweetList;
