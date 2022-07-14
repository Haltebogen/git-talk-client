import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
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
      .statusMessage {
        font-size: ${fontSize.sm};
        width: 100%;
        height:100%
        max-width: 12.5rem;
        min-width: 8.75rem;
      }
    `;
  }}
`;

export interface FollowerListBoxProps {
  name: string;
  profileImg: string | null;
  statusMessage?: string;
}

const STATUSMSG_MAX_LENGTH = 20;
const FollowerListBox = ({ name, profileImg, statusMessage }: FollowerListBoxProps) => {
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
      <div className="statusMessage">
        {statusMessage && (statusMessage.length > STATUSMSG_MAX_LENGTH ? `${statusMessage.slice(0, STATUSMSG_MAX_LENGTH)} ...` : statusMessage)}
      </div>
    </Box>
  );
};

export default FollowerListBox;
