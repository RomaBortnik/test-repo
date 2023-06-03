import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TweetList from 'components/TweetList';
import { UsertBtn } from 'components/TweetListItem/TweetListItem.styled';
import Loader from 'components/Loader';
import { selectError, selectIsLoading, selectUsers } from 'redux/selectors';
import { fetchUsers, fetchNewUsers } from 'redux/operations';

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    pageNumber === 1
      ? dispatch(fetchUsers())
      : dispatch(fetchNewUsers(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <TweetList />
      {users.length !== 15 && (
        <UsertBtn
          type="button"
          onClick={() => setPageNumber(prevValue => prevValue + 1)}
        >
          Load more
        </UsertBtn>
      )}
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Tweets;
