import axios from 'axios';

axios.defaults.baseURL = 'https://6478842a362560649a2def56.mockapi.io/';

const fetchTweets = async pageNumber => {
  const response = await axios.get(`users?page=${pageNumber}&limit=3`);
  return response.data;
};

export default fetchTweets;
