import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import Image from 'next/image';

const Info = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: ${fontSize.xxl};
        color: ${colors.white};
        font-weight: 700;
        padding-top: 2.3125rem;
      }

      p {
        font-size: ${fontSize.lg};
        color: ${colors.white};
        font-weight: 400;
        padding-top: 1.875rem;
      }
    `;
  }}
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export interface FollowerInfoProps {
  name?: string | null;
  profileImg?: string | null;
  stateMessages?: string | null;
}

const FollowerInfo = ({ name, profileImg, stateMessages }: FollowerInfoProps) => {
  return (
    <Info>
      {profileImg ? <ProfileImage src={profileImg} alt="팔로워 프로필" width={260} height={260} unoptimized={true} /> : <Profile />}
      <span>{name}</span>
      <p>{stateMessages}</p>
    </Info>
  );
};

export default FollowerInfo;
