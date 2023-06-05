import styled from 'styled-components';

export const StyledTweetList = styled.ul`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
    flex-wrap: wrap;
    margin-right: auto;

    margin-left: calc(-1 * 40px);
    margin-top: calc(-1 * 40px);
  }

  @media (min-width: 1280px) {
    margin-left: calc(-1 * 58px);
    margin-top: calc(-1 * 58px);
  }
`;
