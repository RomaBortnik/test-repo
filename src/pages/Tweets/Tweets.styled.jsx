import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackButton = styled(NavLink)`
  margin: 0 auto 12px 0;
  width: 76px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 3;
  font-family: inherit;
  cursor: pointer;
  border: none;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
  }
`;
