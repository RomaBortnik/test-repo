import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/filtersSlice';
import {
  HomePage,
  HomePageTitle,
  HomePageBox,
  HomePageDescr,
  HomePageSubTitle,
} from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatusFilter(statusFilters.none));
  }, [dispatch]);
  return (
    <>
      <HomePage>
        <HomePageTitle>Welcome to FollowersConnect! 🌟</HomePageTitle>
        <HomePageBox>
          <HomePageSubTitle>
            FollowersConnect is here to help you foster authentic connections
            and build a vibrant community.
          </HomePageSubTitle>
          <HomePageDescr>
            🚀 Experience the ultimate platform dedicated to connecting you with
            followers from around the world.
          </HomePageDescr>
          <HomePageDescr>
            🚀 Discover like-minded individuals who share your interests,
            passions, and values.
          </HomePageDescr>
          <HomePageDescr>
            🚀 Connect with followers who appreciate your unique perspective and
            engage in meaningful conversations that enrich your online
            experience.
          </HomePageDescr>
        </HomePageBox>
        <HomePageTitle>
          Together, we thrive and make a difference! 🚀
        </HomePageTitle>
      </HomePage>
    </>
  );
};

export default Home;
