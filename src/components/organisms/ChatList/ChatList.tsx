import SearchBox from '@/molecules/search/SearchBox';
import ChatListContainer from '@/molecules/chatList/ChatListContainer';
import { Container } from '@/organisms/followerList/FollowerList';
import AddSomethingContainer from '@/molecules/addSomething/AddSomethingContainer';
import { BasicInputProps } from '@/inputs/BasicInput';
import { ButtonProps } from '@/buttons/Button';
import styled from 'styled-components';

const ListZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
`;

type ChatListProps = ButtonProps & BasicInputProps;

const ChatList = ({ onChange, value, onClick }: ChatListProps) => {
  return (
    <Container>
      <AddSomethingContainer title="대화" ariaLabel="대화 상대 추가" onClick={onClick} />
      <SearchBox onChange={onChange} value={value} />
      <ListZone>
        <ChatListContainer onClick={() => console.log('click')} name="김ㅇㅇ" profileImg={null} messages="받은 메시지 내용" time="12:10" msgCount="2" />
        <ChatListContainer onClick={() => console.log('click')} name="김ㅇㅇ" profileImg={null} messages="받은 메시지 내용" time="12:10" msgCount="2" />
      </ListZone>
    </Container>
  );
};

export default ChatList;
