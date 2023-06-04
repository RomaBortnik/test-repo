import styled from 'styled-components';

export const FilterButton = styled.button`
  position: relative;
  display: inline-flex;
  padding: 8px 0;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  overflow: hidden;
  width: 120px;

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateX(-101%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: translateX(0);
  }
`;
