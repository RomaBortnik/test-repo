import { StyledNavLink, MainNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNav>
      <StyledNavLink to="/" onClick={() => window.scrollTo(0, 0)}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/tweets" onClick={() => window.scrollTo(0, 0)}>
        Tweets
      </StyledNavLink>
    </MainNav>
  );
};

export default Navigation;
