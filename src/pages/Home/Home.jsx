import {
  HomePage,
  HomePageContainer,
  PhoneBookWrapper,
  PhoneBookTitle,
  PhoneBookBox,
  PhoneBookDescr,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <HomePage>
        <HomePageContainer>
          <PhoneBookWrapper>
            <PhoneBookBox>
              <PhoneBookTitle>Phonebook</PhoneBookTitle>
              <PhoneBookDescr>
                The whole library is in your phone
              </PhoneBookDescr>
            </PhoneBookBox>
          </PhoneBookWrapper>

          <PhoneBookWrapper></PhoneBookWrapper>
        </HomePageContainer>
      </HomePage>
    </>
  );
};

export default Home;
