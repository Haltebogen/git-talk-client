import ChatContainer from '@/molecules/chatRoom/ChatContainer';
import React, { FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import useInput from 'hooks/useInput';
import SendForm from '@/molecules/chatRoom/SendForm';
import Topbar from '@/molecules/chatRoom/Topbar';
import { BoxLayout } from '@/boxes/Box';

const Container = styled(BoxLayout)`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.secondary};
      justify-content: center;
      flex-direction: column;
      max-width: 44.3125rem;
      max-height: 51.25rem;
    `;
  }}
`;

interface ChatRoomProps {
  nickname: string;
}

const ChatRoom = ({ nickname }: ChatRoomProps) => {
  const [chat, onChangeChat, setChat] = useInput('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!chat) return;
    setChat('');
    setMessages([...messages, chat]);
  };

  const onPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmitForm(event);
    }
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container boxType="background">
      <Topbar nickname={nickname} profileImg={null} isVisible={isVisible} onSpread={handleVisible} onClick={() => console.log('event')} />
      <ChatContainer messages={messages} />
      <SendForm onChange={onChangeChat} value={chat} onSubmit={onSubmitForm} onKeyDown={onPressEnter} />
    </Container>
  );
};

export default ChatRoom;
