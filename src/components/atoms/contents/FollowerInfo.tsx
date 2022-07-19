import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';

const Info = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
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

export interface FollowerInfoProps {
  name: string;
  profileImg: string | null;
  stateMessages?: string;
}

const FollowerInfo = ({ name, profileImg, stateMessages }: FollowerInfoProps) => {
  return (
    <Info>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <Profile />
        </div>
      )}
      <span>{name}</span>
      <p>{stateMessages}</p>
    </Info>
  );
};

export default FollowerInfo;
