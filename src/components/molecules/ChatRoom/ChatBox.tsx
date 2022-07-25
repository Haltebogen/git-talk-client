import React from 'react';
import styled from 'styled-components';
import MsgBox from '@/boxes/MsgBox';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .receiver {
    display: flex;
  }
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 30%;
  }
`;

export const Space = styled.div`
  min-width: 6.25rem;
`;

export interface ChatBoxProps {
  isMe: boolean;
  message: string;
}

const ChatBox = ({ isMe, message }: ChatBoxProps) => {
  return (
    <>
      {isMe ? (
        <Container>
          <Space />
          <MsgBox message={message} isMe={isMe} />
        </Container>
      ) : (
        <Container>
          <div className="receiver">
            <MsgBox message={message} isMe={isMe} />
          </div>
          <Space />
        </Container>
      )}
    </>
  );
};

export default ChatBox;
