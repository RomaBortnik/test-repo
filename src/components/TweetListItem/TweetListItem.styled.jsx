import styled from 'styled-components';
import ellipse from '../../images/ellipse.png';

export const UserCard = styled.li`
  position: relative;
  width: 100%;
  height: 460px;
  padding: 28px 36px 36px;
  color: #ebd8ff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &:not(:last-child) {
    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% / 2 - 40px));
    margin: 40px 0 0 40px;
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% / 3 - 58px));
    margin: 58px 0 0 58px;
  }
`;

export const UserLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: auto;
`;

export const UserBackgroundImage = styled.img`
  width: 308px;
  height: auto;
  margin: 0 auto 88px;

  @media (max-width: 767px) {
    margin-bottom: 116px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 103px;
  }
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserAvatar = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 128px;

  @media (min-width: 768px) {
    left: 136px;
  }

  @media (min-width: 1280px) {
    left: 150px;
  }

  background-image: url('${ellipse}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const UserImage = styled.img`
  position: absolute;
  top: 7px;
  left: 12px;
  width: 57px;
  border-radius: 50%;
`;

export const UserTweets = styled.p`
  margin-bottom: 16px;
`;

export const UserFollowers = styled.p`
  margin-bottom: 26px;
`;

export const UsertBtn = styled.button`
  margin: 0 auto;
  width: 196px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  font-family: inherit;
  cursor: pointer;
  border: none;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const UserUnfollowBtn = styled(UsertBtn)`
  background-color: #5cd3a8;

  &:hover {
    background-color: #b8ecec;
  }
`;
