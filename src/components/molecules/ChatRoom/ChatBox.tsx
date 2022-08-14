import React from 'react';
import styled from 'styled-components';
import MsgBox from '@/boxes/MsgBox';
import ProfileImg from '@/icons/profile_img.svg';

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

export interface ChatBoxProps {
  profileImg: string | null;
  isMe: boolean;
  message: string;
}

const ChatBox = ({ profileImg, isMe, message }: ChatBoxProps) => {
  return (
    <>
      {isMe ? (
        <Container>
          <Space />
          <div className="sender">
            <MsgBox message={message} isMe={isMe} />
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
            <MsgBox message={message} isMe={isMe} />
          </div>
          <Space />
        </Container>
      )}
    </>
  );
};

export default ChatBox;
