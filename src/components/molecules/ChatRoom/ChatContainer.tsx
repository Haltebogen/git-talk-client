import React from 'react';
import ChatBox from './ChatBox';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      max-width: 43.725rem;
      height: 49.0625rem;
      align-items: center;
      padding: 1.875rem;
      background-color: ${colors.secondary};
    `;
  }}
`;

const ChatContainer = () => {
  return (
    <Container>
      <ChatBox isMe={false} message="안녕" />
      <ChatBox
        isMe={true}
        message="안ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ녕"
      />
      <ChatBox isMe={true} message="안녕" />
      <ChatBox isMe={false} message="안녕안녕 ㅏㅇㄶㄴㄷㅎㄴㄷㅎ니댜ㅗ히ㅑㄴ돟니ㅑㅗㅎㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ뇌ㅑ노햐ㅣㅗㄷ" />
      <ChatBox isMe={true} message="안녕" />
    </Container>
  );
};

export default ChatContainer;
