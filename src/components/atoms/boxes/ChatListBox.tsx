import styled, { css } from 'styled-components';
import Profile from '@/icons/profile_img.svg';
import { useState } from 'react';

export const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
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

      .profileImg {
        padding: 1.625rem 0 1.625rem 2.1875rem;
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

      .name {
        font-size: ${fontSize.sm};
        font-weight: 700;
      }

      .messages {
        font-size: ${fontSize.xs};
        color: ${colors.lightgray};
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
      <Middle>
        <div className="name">{name}</div>
        <div className="messages">{messages && (messages.length > MSG_MAX_LENGTH ? `${messages.slice(0, MSG_MAX_LENGTH)} ...` : messages)}</div>
      </Middle>
      <Right>
        <div className="time">{time}</div>
        <span className="msgCount">{msgCount}</span>
      </Right>
    </Box>
  );
};

export default ChatListBox;
