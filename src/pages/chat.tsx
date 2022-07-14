import SearchBox from '@/boxes/SearchBox';
import ChatListContainer from '@/molecules/ChatList/ChatListContainer';
import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div>
      <SearchBox />
      <ChatListContainer />
    </div>
  );
};

export default Chat;
