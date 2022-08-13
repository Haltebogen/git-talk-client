import SearchBox from '@/molecules/search/SearchBox';
import ChatListContainer from '@/molecules/ChatList/ChatListContainer';
import { Container } from '@/organisms/FollowerList/FollowerList';
import AddSomethingContainer from '@/molecules/addSomething/AddSomethingContainer';
import { BasicInputProps } from '@/inputs/BasicInput';
import { AddButtonProps } from '@/buttons/AddButton';

type ChatListProps = AddButtonProps & BasicInputProps;

const ChatList = ({ onChange, value, onClick }: ChatListProps) => {
  return (
    <Container>
      <AddSomethingContainer title="대화" ariaLabel="대화 상대 추가" onClick={onClick} />
      <SearchBox onChange={onChange} value={value} />
      <ChatListContainer />
    </Container>
  );
};

export default ChatList;
