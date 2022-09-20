import React from 'react';
import styled, { css } from 'styled-components';
import ProfileImg from '@/icons/profile_img.svg';
import { BoxLayout } from '@/boxes/Box';

export const Container = styled.div`
  .receiver {
    display: flex;
    justify-content: flex-start;
    gap: 1.25rem;

    .profileImg {
      transform: scale(0.1);
      width: 100%;
      max-width: 1.25rem;
      max-height: 1rem;
    }
  }

  .sender {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Space = styled.div`
  min-width: 6.25rem;
`;

const SendMessage = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      color: ${colors.navy};
      background-color: ${colors.secondary};
      border: 0.0625rem solid rgba(112, 124, 151, 0.25);
      border-radius: 0.625rem 0.625rem 0rem 0.625rem;
      width: auto;
    `;
  }}
`;

const ReceiveMessage = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      color: ${colors.white};
      width: auto;
    `;
  }}
`;

export interface MessageAreaProps {
  profileImg: string | null;
  isMe: boolean;
  message: string;
}

const MessageArea = ({ profileImg, isMe, message }: MessageAreaProps) => {
  return (
    <>
      {isMe ? (
        <Container>
          <Space />
          <div className="sender">
            <SendMessage boxType="message">{message}</SendMessage>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="receiver">
            {profileImg ? (
              <div className="profileImg">{profileImg}</div>
            ) : (
              <div className="profileImg">
                <ProfileImg />
              </div>
            )}
            <ReceiveMessage boxType="message">{message}</ReceiveMessage>
          </div>
          <Space />
        </Container>
      )}
    </>
  );
};

export default MessageArea;
