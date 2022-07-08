import SearchBox from '@/boxes/SearchBox';
import ChatListContainer from '@/molecules/ChatList/ChatListContainer';

const chat = () => {
  return (
    <div>
      <SearchBox />
      <ChatListContainer />
    </div>
  );
};

export default chat;
