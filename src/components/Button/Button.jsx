import clsx from 'clsx';

import { FilterButton } from './Button.styled';
import css from './Button.module.css';

const Button = ({ selected = false, children, ...otherProps }) => {
  return (
    <FilterButton
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type="button"
      {...otherProps}
    >
      {children}
    </FilterButton>
  );
};

export default Button;
