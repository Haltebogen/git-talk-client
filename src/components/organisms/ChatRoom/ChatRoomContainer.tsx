import ChatInputBox from '@/boxes/ChatInputBox';
import ChatRoomNav from '@/boxes/ChatRoomNav';
import ChatContainer from '@/molecules/ChatList/ChatContainer';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 53rem;
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
