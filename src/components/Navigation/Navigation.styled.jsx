import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 18px;
  padding: 8px 4px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: translateX(-100%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &.active::after {
    transform: translateX(0);
  }
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 144px;

  @media (min-width: 768px) {
    width: 180px;
  }
`;
