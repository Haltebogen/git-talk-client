import { BoxLayout, BoxProps } from '@/boxes/Box';
import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';

const FollowerListBox = styled(BoxLayout)`
  gap: 1.3125rem;
  align-items: center;
  border: none;
  max-width: 36.25rem;
  max-height: 5.875rem;

  .profileImg {
    padding: 1.25rem 0 1.25rem 2.1875rem;
    transform: scale(0.2);
    width: 100%;
    max-width: 3.25rem;

    svg {
      padding-left: 2.8125rem;
    }
  }
`;

export const Name = styled.div`
  ${({ theme }) => {
    const { fontSize } = theme;
    return css`
      font-size: ${fontSize.sm};
      display: flex;
      width: 100%;
      font-weight: 700;
      justify-content: flex-start;
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
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height:100%
      max-width: 12.5rem;
      min-width: 8.75rem;
    `;
  }}
`;

interface FollowerListContainer extends BoxProps {
  name: string;
  profileImg: string | null;
  statusMessage?: string;
}

const STATUSMSG_MAX_LENGTH = 20;

const FollowerListContainer = ({ name, profileImg, statusMessage, onClick }: FollowerListContainer) => {
  return (
    <FollowerListBox boxType="list" onClick={onClick}>
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
    </FollowerListBox>
  );
};

export default FollowerListContainer;
