import Navigation from 'components/Navigation';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import StatusFilter from 'components/StatusFilter';

import { Header, NavContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <NavContainer>
          <Navigation />
          <StatusFilter />
        </NavContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
