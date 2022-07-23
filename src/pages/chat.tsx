import SearchBox from '@/boxes/SearchBox';
import ChatListContainer from '@/molecules/ChatList/ChatListContainer';
import ChatRoomContainer from '@/organisms/ChatRoom/ChatRoomContainer';
import NavBarContainer from '@/organisms/NavBar/NavBarContainer';
import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div>
      <NavBarContainer />
      <SearchBox />
      <ChatListContainer />
      <ChatRoomContainer />
    </div>
  );
};

export default Chat;
