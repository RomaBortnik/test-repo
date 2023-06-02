import Navigation from 'components/Navigation';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

import { Header, NavContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <NavContainer>
          <Navigation></Navigation>
        </NavContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
