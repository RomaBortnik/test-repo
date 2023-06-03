import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

import Button from 'components/Button';
import { FilterContainer } from './StatusFilter.styled';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <FilterContainer>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.following}
        onClick={() => handleFilterChange(statusFilters.following)}
      >
        Following
      </Button>
      <Button
        selected={filter === statusFilters.unfollowing}
        onClick={() => handleFilterChange(statusFilters.unfollowing)}
      >
        Unfollowing
      </Button>
    </FilterContainer>
  );
};

export default StatusFilter;
