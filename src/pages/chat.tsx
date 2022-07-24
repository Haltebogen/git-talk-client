import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div>
      <ChatRoomContainer />
      <NavBarLayout>
        <ChatList />
      </NavBarLayout>
    </div>
  );
};

export default Chat;
