import { BoxLayout, BoxProps } from '@/boxes/Box';
import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';

const ChatListBox = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
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

      &:hover ${Middle} {
        p {
          color: ${colors.white};
        }
      }

      &:hover ${Right} {
        span {
          color: ${colors.white};
        }
      }
    `;
  }}
`;

const Middle = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.3125rem;

      span {
        display: flex;
        justify-content: flex-start;
        font-size: ${fontSize.sm};
        font-weight: 700;
        padding-left: 2.25rem;
      }

      p {
        display: flex;
        justify-content: flex-start;
        font-size: ${fontSize.xs};
        color: ${colors.lightgray};
        padding-left: 2.25rem;
        max-width: 12.5rem;
        min-width: 8.75rem;
      }
    `;
  }}
`;

const Right = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      padding-right: 1.125rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-end;
      position: relative;

      span {
        position: absolute;
        top: -1.5625rem;
        color: ${colors.navy};
        font-size: ${fontSize.xs};
      }

      .msgCount {
        padding: 0.3125rem 0.5rem;
        border-radius: 50%;
        color: ${colors.white};
        background-color: ${colors.msgcount};
        font-size: ${fontSize.micro};
      }
    `;
  }}
`;

interface ChatListContainerProps extends BoxProps {
  name: string;
  profileImg: string | null;
  messages?: string;
  time: string;
  msgCount: string;
}

const MSG_MAX_LENGTH = 30;

const ChatListContainer = ({ onClick, name, profileImg, messages, time, msgCount }: ChatListContainerProps) => {
  return (
    <ChatListBox boxType="list" onClick={onClick}>
      {profileImg ? (
        <div className="profileImg">{profileImg}</div>
      ) : (
        <div className="profileImg">
          <Profile />
        </div>
      )}
      <Middle>
        <span>{name}</span>
        <p>{messages && (messages.length > MSG_MAX_LENGTH ? `${messages.slice(0, MSG_MAX_LENGTH)} ...` : messages)}</p>
      </Middle>
      <Right>
        <span>{time}</span>
        <div className="msgCount">{msgCount}</div>
      </Right>
    </ChatListBox>
  );
};

export default ChatListContainer;
