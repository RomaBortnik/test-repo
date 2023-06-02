import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchTweets from 'services/fetchTweets';
import TweetList from 'components/TweetList';
import { UsertBtn } from 'components/TweetListItem/TweetListItem.styled';
import Loader from 'components/Loader';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const getTweets = async () => {
      setisLoading(true);
      try {
        const data = await fetchTweets(pageNumber);
        pageNumber === 1
          ? setTweets(data)
          : setTweets(prevValue => [...prevValue, ...data]);
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getTweets(pageNumber);
  }, [pageNumber]);

  return (
    <>
      {isLoading && <Loader />}
      <TweetList tweets={tweets} />
      {tweets.length !== 15 && (
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
