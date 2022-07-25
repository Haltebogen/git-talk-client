import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Area = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  margin-top: 5.625rem;
`;

const Chat: NextPage = () => {
  return (
    <Container>
      <NavBarLayout>
        <Area>
          <ChatList />
        </Area>
        <Area>
          <ChatRoomContainer />
        </Area>
      </NavBarLayout>
    </Container>
  );
};

export default Chat;
