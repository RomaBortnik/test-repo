import Navigation from 'components/Navigation';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import StatusFilter from 'components/StatusFilter';
import { useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selectors';

import { Header, NavContainer } from './AppBar.styled';

const AppBar = () => {
  const filterStatus = useSelector(selectStatusFilter);
  return (
    <Header>
      <Container>
        <NavContainer>
          <Navigation />
          {filterStatus !== 'none' && <StatusFilter />}
        </NavContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
