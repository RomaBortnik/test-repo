import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: rgba(70, 84, 97, 0.9);

  padding: 4px 0;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
