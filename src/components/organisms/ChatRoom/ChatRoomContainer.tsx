import ChatInputContainer from '@/molecules/chatRoom/ChatInputContainer';
import ChatRoomNav from '@/molecules/chatRoom/ChatRoomNav';
import ChatContainer from '@/molecules/chatRoom/ChatContainer';
import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 51.25rem;
`;

const ChatRoomContainer = () => {
  const [chat, onChangeChat, setChat] = useInput('');
  const [messages, setMessages] = useState<any[]>([]);
  const onSubmitForm = (e: any) => {
    e.preventDefault();
    if (!chat) return;
    setChat('');
    setMessages([...messages, chat]);
  };
  return (
    <Container>
      <ChatRoomNav name="선영" profileImg={null} nickname="yuniiyuns" />
      <ChatContainer messages={messages} />
      <ChatInputContainer onChange={onChangeChat} value={chat} onSubmit={onSubmitForm} />
    </Container>
  );
};

export default ChatRoomContainer;
