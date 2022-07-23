import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
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
