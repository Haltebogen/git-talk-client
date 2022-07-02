import styled, { css } from 'styled-components';
import Profile from '@/icons/profileImg.svg';
import { useState } from 'react';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      border-radius: 0.375rem;
      max-width: 36.25rem;
      background-color: ${colors.secondary};
      display: flex;
      width: 100%;
      gap: 1.3125rem;
      align-items: center;
      &:hover {
        background-color: ${colors.hover};
        color: ${colors.white};
        cursor: pointer;
      }
    
      .profileImg {
        padding: 1.25rem 0 1.25rem 2.1875rem;
      }

      .name {
        font-size: ${fontSize.sm};
        font-weight: 700;
        
      }
      .statusMessages {
        font-size: ${fontSize.sm};
        width: 100%;
        height:100%
        max-width: 12.5rem;
        min-width: 8.75rem;
      }
      span {
        display: flex;
        font-size: ${fontSize.micro};
        color: ${colors.lightpurple};
        padding: 0.6875rem 0.6875rem 0 0;
        font-weight: 700;
        align-self :normal;
      }
    `;
  }}
`;

export interface FollowerListBoxProps {
  name: string;
  isFollower: boolean;
  profileImg: string | null;
  statusMessages?: string;
}

const STATUSMSG_MAX_LENGTH = 20;
const FollowerListBox = ({ name, isFollower, profileImg, statusMessages }: FollowerListBoxProps) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Box
      onClick={() => {
        setIsClick(!isClick);
      }}
    >
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <Profile />
        </div>
      )}
      <div className="name">{name}</div>
      <div className="statusMessages">
        {statusMessages && (statusMessages.length > STATUSMSG_MAX_LENGTH ? `${statusMessages.slice(0, STATUSMSG_MAX_LENGTH)} ...` : statusMessages)}
      </div>
      {isFollower ? <span>Follower</span> : ''}
    </Box>
  );
};

export default FollowerListBox;
