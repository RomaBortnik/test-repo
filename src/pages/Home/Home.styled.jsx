import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100%;
  color: #fff;
  background-color: rgba(70, 84, 97, 0.9);
  border-radius: 24px;
  margin: 24px auto;
  padding: 16px 12px;

  @media (min-width: 768px) {
    border-radius: 48px;
    margin: 32px auto;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    width: 1000px;
    border-radius: 60px;
  }
`;

export const HomePageBox = styled.ul`
  margin: 12px 0 24px;

  @media (min-width: 768px) {
    margin: 32px 0;
  }
`;

export const HomePageTitle = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 1280px) {
    font-size: 50px;
  }
`;

export const HomePageSubTitle = styled.h2`
  text-align: center;
  font-style: italic;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 25px;
  }
`;

export const HomePageDescr = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;
