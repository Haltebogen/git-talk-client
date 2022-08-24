import React, { useRef, useEffect } from 'react';
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
      padding: 1.875rem;
      background-color: ${colors.secondary};
      overflow-y: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    `;
  }}
`;

export type ChatContainerProps = {
  messages: string[];
};

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container>
      {messages &&
        messages.map((message: any, i: number) => (
          <div key={i} ref={scrollRef}>
            <ChatBox profileImg={null} message={message} isMe={false} />
          </div>
        ))}
    </Container>
  );
};

export default ChatContainer;
