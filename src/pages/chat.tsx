import SearchBox from '@/boxes/SearchBox';
import ChatListContainer from '@/molecules/ChatList/ChatListContainer';
import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import NavBarContainer from '@/organisms/NavBar/NavBarContainer';
import ChatList from '@/organisms/ChatList/ChatList';
import NavBarLayout from '@/organisms/NavBar/NavBarLayout';
import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div>
      <NavBarContainer />
      <SearchBox />
      <ChatListContainer />
      <ChatRoomContainer />
      <NavBarLayout>
        <ChatList />
      </NavBarLayout>
    </div>
  );
};

export default Chat;
