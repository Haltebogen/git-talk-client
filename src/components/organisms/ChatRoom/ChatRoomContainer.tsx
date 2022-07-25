import ChatInputBox from '@/boxes/ChatInputBox';
import ChatRoomNav from '@/boxes/ChatRoomNav';
import ChatContainer from '@/molecules/ChatRoom/ChatContainer';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatRoomContainer = () => {
  return (
    <Container>
      <ChatRoomNav name="선영" profileImg={null} nickname="yuniiyuns" />
      <ChatContainer />
      <ChatInputBox />
    </Container>
  );
};

export default ChatRoomContainer;
