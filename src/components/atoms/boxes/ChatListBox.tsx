import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import { useState } from 'react';
import { ListBox } from './BoxStyles';

const Middle = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.3125rem;

      .name {
        font-size: ${fontSize.sm};
        font-weight: 700;
        padding-left: 2.25rem;
      }

      .messages {
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

      .time {
        position: absolute;
        top: -1.5625rem;
        color: ${colors.navy};
        font-size: ${fontSize.xs};
      }

      .msgCount {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 0.3125rem 0.5rem;
        border-radius: 50%;
        color: ${colors.white};
        background-color: ${colors.msgcount};
        font-size: ${fontSize.micro};
      }
    `;
  }}
`;

const ChatBox = styled(ListBox)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      &:hover ${Middle} {
        .messages {
          color: ${colors.white};
        }
      }

      &:hover ${Right} {
        .time {
          color: ${colors.white};
        }
      }

      &:active {
        background-color: ${colors.clickbox};
      }
    `;
  }}
`;

export interface ChatListBoxProps {
  name: string;
  profileImg: string | null;
  messages?: string;
  time: string;
  msgCount: string;
}

const MSG_MAX_LENGTH = 30;

const ChatListBox = ({ name, profileImg, messages, time, msgCount }: ChatListBoxProps) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <ChatBox
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
      <Middle>
        <div className="name">{name}</div>
        <div className="messages">{messages && (messages.length > MSG_MAX_LENGTH ? `${messages.slice(0, MSG_MAX_LENGTH)} ...` : messages)}</div>
      </Middle>
      <Right>
        <div className="time">{time}</div>
        <span className="msgCount">{msgCount}</span>
      </Right>
    </ChatBox>
  );
};

export default ChatListBox;
