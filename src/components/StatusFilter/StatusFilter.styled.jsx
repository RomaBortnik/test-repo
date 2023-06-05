import styled from 'styled-components';

export const FilterBtn = styled.div`
  position: relative;
  width: 120px;
  font-size: 16px;
  border-radius: 12px;
  color: #000;
  background-color: #fff;
  padding: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 144px;
    font-size: 18px;
  }
`;

export const FilterContainer = styled.div`
  position: absolute;
  width: 120px;
  top: 36px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 12px;
  background-color: #fff;

  @media (min-width: 768px) {
    width: 144px;
    top: 39px;
  }
`;
