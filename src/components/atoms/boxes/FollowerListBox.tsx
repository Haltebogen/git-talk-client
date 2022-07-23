import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import { useState } from 'react';
import { ListBox } from './BoxStyles';

export const Name = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.sm};
      width: 100%;
      font-weight: 700;
      padding-left: 2.25rem;
    `;
  }}
`;

export const StatusMessage = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.sm}
      padding-left: 2.25rem;;
      width: 100%;
      height:100%
      max-width: 12.5rem;
      min-width: 8.75rem;
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
    <ListBox
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
      <Name>{name}</Name>
      <StatusMessage>
        {statusMessage && (statusMessage.length > STATUSMSG_MAX_LENGTH ? `${statusMessage.slice(0, STATUSMSG_MAX_LENGTH)} ...` : statusMessage)}
      </StatusMessage>
    </ListBox>
  );
};

export default FollowerListBox;
