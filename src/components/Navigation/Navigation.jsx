import { StyledNavLink, MainNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tweets">Tweets</StyledNavLink>
    </MainNav>
  );
};

export default Navigation;
