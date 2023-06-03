import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

import Button from 'components/Button';
import { FilterContainer, FilterBtn } from './StatusFilter.styled';
import { fetchUsers, fetchAllUsers } from 'redux/operations';
import useOutsideAlerter from 'hooks/useOutsideAlerter';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <FilterBtn
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      Filter
      {isShow && (
        <FilterContainer ref={ref}>
          <Button
            selected={filter === statusFilters.all}
            onClick={() => {
              dispatch(fetchUsers());
              handleFilterChange(statusFilters.all);
            }}
          >
            All
          </Button>
          <Button
            selected={filter === statusFilters.following}
            onClick={() => {
              dispatch(fetchAllUsers());
              handleFilterChange(statusFilters.following);
            }}
          >
            Following
          </Button>
          <Button
            selected={filter === statusFilters.unfollowing}
            onClick={() => {
              dispatch(fetchAllUsers());
              handleFilterChange(statusFilters.unfollowing);
            }}
          >
            Unfollowing
          </Button>
        </FilterContainer>
      )}
    </FilterBtn>
  );
};

export default StatusFilter;
