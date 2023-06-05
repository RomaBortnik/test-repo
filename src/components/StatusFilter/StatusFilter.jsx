import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

import Button from 'components/Button';
import { FilterContainer, FilterBtn } from './StatusFilter.styled';
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
              handleFilterChange(statusFilters.all);
            }}
          >
            All
          </Button>
          <Button
            selected={filter === statusFilters.unfollowing}
            onClick={() => {
              handleFilterChange(statusFilters.unfollowing);
            }}
          >
            Follow
          </Button>
          <Button
            selected={filter === statusFilters.following}
            onClick={() => {
              handleFilterChange(statusFilters.following);
            }}
          >
            Followings
          </Button>
        </FilterContainer>
      )}
    </FilterBtn>
  );
};

export default StatusFilter;
