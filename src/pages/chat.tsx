import ChatList from '@/organisms/chatList/ChatList';
import NavBarLayout from '@/organisms/navBar/NavBarLayout';
import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div>
      <NavBarLayout>
        <ChatList />
      </NavBarLayout>
    </div>
  );
};

export default Chat;
